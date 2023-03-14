import { CollectionBeforeChangeHook, FieldHook } from 'payload/types';
import payload from 'payload';
import { calculatePortfolioValue } from '../utils';


export const setLatestPrice: CollectionBeforeChangeHook = async ({ operation, data }) => {
  if (operation === 'create') {
    const historicPrices = data.historicPrices;
    const latestPrice = historicPrices.length > 0 ? historicPrices[ historicPrices.length - 1 ].price : null;
    data.latestPrice = latestPrice;
  }
  return data;
};

export const updateLatestPrice: FieldHook = async ({ operation, data, previousDoc }) => {
  if (operation === 'update') {
    const historicPrices = data.historicPrices;
    const latestPrice = historicPrices.length > 0 ? historicPrices[ historicPrices.length - 1 ].price : null;

    if (previousDoc && (latestPrice !== previousDoc?.latestPrice)) {
      await payload.update({
        collection: 'stocks',
        id: previousDoc?.id,
        data: {
          latestPrice,
        },
      });
    }
  }
  return data;
};

export const sortPricesByDate: FieldHook = async ({ operation, data }) => {
  if (operation === 'update' || operation === 'create') {
    const historicPrices = data.historicPrices;
    const sortedPrices = historicPrices?.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    data.historicPrices = sortedPrices || [];
  }
  return data;
};

export const updateUserPortfolioValuess: FieldHook = async ({ operation, data }) => {
  if (operation === 'update' || operation === 'create') {
    const stockId = data.id;
    if (!stockId) return data;
    
    const users = await payload.find({
      collection: 'users',
      where: {
        'stocks.stock': {
          equals: stockId,
        }
      },
    });
    if (!users) return data;

    for (const user of users.docs) {
      const value = await calculatePortfolioValue(user);
      await payload.update({
        collection: 'users',
        id: user.id,
        data: {
          portfolioValue: value,
        },
      });
    }
  }
  return data;
};

export const addDividendToUsers: FieldHook = async ({ operation, data }) => {
  if (!data.dividends) return data;
  if (operation === 'update') {
    const stockId = data.id;
    if (!stockId) return data;

    const users = await payload.find({
      collection: 'users',
      where: {
        'stocks.stock': {
          equals: stockId,
        }
      },
    });
    if (!users) return data;

    for (const user of users.docs) {
      const userStock = user.stocks?.find((stock) => stock.stock === stockId);
      if (!userStock) return data;

      const dividend = {
        dividend: stockId,
        quantity: userStock.quantity,
      };
      await payload.update({
        collection: 'users',
        id: user.id,
        data: {
          stocks: [
            ...user.stocks,
            {
              ...userStock,
              dividends: [
                ...userStock.dividends,
                dividend,
              ],
            },
          ],
        },
      });
    }
  }
  return data;
};
