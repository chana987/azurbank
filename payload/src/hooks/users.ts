import { FieldHook, CollectionAfterChangeHook, CollectionBeforeChangeHook } from 'payload/types';
import payload from 'payload';
import { calculateBalance, calculatePortfolioValue } from '../utils';

export const updateStockUsers: FieldHook = async ({ value, previousValue, data }) => {
  let stocksToAdd;
  let stocksToRemove;

  if (previousValue && !value) {
    stocksToRemove = previousValue;
  } else if (value && !previousValue) {
    stocksToAdd = value;
  } else if (value && previousValue) {
    stocksToAdd = value.filter((stock) => !previousValue.includes(stock));
    stocksToRemove = previousValue.filter((stock) => !value.includes(stock));
  }
  
  // TODO: Add user to stock.users
  if (stocksToAdd) {
    for (const stockId of stocksToAdd) {
      const stock = await payload.findByID({
        collection: 'stocks',
        id: stockId.stock,
      });
      if (!stock) return value;
      
      await payload.update({
        collection: 'stocks',
        id: stock.id,
        data: {
          // users: [ ...stock.users, data.id ],
        },
      });
    }
  }

  // TODO: Remove user from stock.users
  if (stocksToRemove) {
    for (const stockId of stocksToRemove) {
      const stock = await payload.findByID({
        collection: 'stocks',
        id: stockId.stock,
      });
      if (!stock) return value;

      await payload.update({
        collection: 'stocks',
        id: stock.id,
        data: {
          // users: stock.users.filter(userId => userId !== data.id),
        },
      });
    }
  }
  return value;
};

export const updateUserPortfolioValue: FieldHook = async ({ data }) => {
  data.portfolioValue = await calculatePortfolioValue(data);
};

export const updateUserBalance: FieldHook = async ({ data }) => {
  data.balance = await calculateBalance(data);
};
