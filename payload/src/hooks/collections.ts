import { CollectionAfterChangeHook, FieldHook } from 'payload/types';
import payload from 'payload';

export const setLatestPrice: CollectionAfterChangeHook = async ({ operation, doc }) => {
  if (operation === 'update' || operation === 'create') {
    const historicPrices = doc.historicPrices as any[];
    const latestPrice = historicPrices.length > 0 ? historicPrices[ historicPrices.length - 1 ].price : null;
    doc.latestPrice = latestPrice;
  }
};

export const sortPricesByDate: CollectionAfterChangeHook = async ({ operation, doc }) => {
  if (operation === 'update' || operation === 'create') {
    const historicPrices = doc.historicPrices as any[];
    const sortedPrices = historicPrices.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    doc.historicPrices = sortedPrices;
  }
};

export const addDividendsToUsers: CollectionAfterChangeHook = async ({ doc, req }) => {
  const users = await payload.find({
    collection: 'users',
    where: {
      stocks: {
        contains: {
          stock: doc.stock,
        },
      }
    }
  });

  for (const user of users.docs) {
    const userStock = user.stocks.find((stock) => stock.stock === doc.stock);

    if (userStock) {
      const dividend = {
        dividend: doc.id,
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
    };
  }
};
