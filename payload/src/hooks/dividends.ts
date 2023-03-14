import { CollectionAfterChangeHook, CollectionBeforeChangeHook } from 'payload/types';
import payload from 'payload';

export const addDividendToStock: CollectionAfterChangeHook = async ({ operation, doc, req }) => {
  if (operation === 'create' || operation === 'update') {
    const stockId = doc.stock.id;
    if (!stockId) return doc;

    const stock = await payload.findByID({
      collection: 'stocks',
      id: stockId,
    });
    if (!stock) return doc;

    await payload.update({
      collection: 'stocks',
      id: stockId,
      data: {
        dividends: [...stock.dividends, doc.id],
      }
    });
  }
  return doc;
};

export const getDividendName: CollectionBeforeChangeHook = async ({ operation, data }) => {
  if (operation === 'create' || operation === 'update') {
    data.name = `${data.date?.slice(0, 4) || ''} ${data.quarter || ''} ${data.stock?.name || ''}`;
    return data;
  }
};
