import { FieldHook, CollectionAfterChangeHook, CollectionBeforeChangeHook } from 'payload/types';
import payload from 'payload';
import { calculatePortfolioValue } from '../utils';

export const addUserToStock: CollectionAfterChangeHook = async ({ operation, doc, previousDoc }) => {
  let stocksToAdd;

  if (operation === 'create') {
    stocksToAdd = doc.stocks?.map((stock) => stock.stock?.id);
  } else if (operation === 'update') {
    const newStocks = doc.stocks?.map((stock) => stock.stock?.id);
    const previousStocks = previousDoc?.stocks?.map((stock) => stock.stock?.id);
    stocksToAdd = newStocks?.filter((stock: string) => !previousStocks?.includes(stock));
    const stocksToRemove = previousStocks?.filter((stock: string) => !newStocks?.includes(stock));

    stocksToRemove.forEach(async (stock: string) => {
      const stockData = await payload.findByID({
        collection: 'stocks',
        id: stock,
      });
      const users = stockData?.users?.map(user => user.id) || [];
      users?.splice(users?.indexOf(doc.id), 1);

      payload.update({
        collection: 'stocks',
        id: stock,
        data: {
          users
        }
      });
    });
  }

  stocksToAdd.forEach(async (stock: string) => {
    const stockData = await payload.findByID({
      collection: 'stocks',
      id: stock,
    });
    const users = stockData?.users?.map(user => user.id) || [];
    users.push(doc.id);

    payload.update({
      collection: 'stocks',
      id: stock,
      data: {
        users
      }
    });
  });
};

export const updateUserPortfolioValue: FieldHook = async ({ data }) => {
  data.portfolioValue = await calculatePortfolioValue(data);
};
