import { FieldHook, CollectionAfterChangeHook, CollectionBeforeChangeHook } from 'payload/types';
import payload from 'payload';
import { calculatePortfolioValue } from '../utils';

export const addUserToStock: CollectionAfterChangeHook = async ({ operation, doc, previousDoc }) => {
  const newStocks = JSON.stringify(doc.stocks);
  const previousStocks = JSON.stringify(previousDoc?.stocks);
  if (operation === 'create' || (operation === 'update' && newStocks !== previousStocks)) {
    const stocks = doc.stocks?.map((stock: any) => stock.stock);
    if (!stocks || !doc.id) return doc;

    for (const stock of stocks) {
      payload.update({
        collection: 'stocks',
        id: stock.id,
        data: {
          users: [
            ...stock.users?.map((user: any) => user.id) || [],
            doc.id,
          ],
        }
      });
    }
  }
};

export const updateUserPortfolioValue: FieldHook = async ({ data }) => {
  data.portfolioValue = await calculatePortfolioValue(data);
};
