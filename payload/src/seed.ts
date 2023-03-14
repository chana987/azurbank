import { Payload } from 'payload';
import { User, Stock } from './payload-types';

// seed the database with some data
export const seed = async (payload: Payload): Promise<void> => {
  // create an admin user
  const admin = await payload.create({
    collection: 'users',
    data: {
      username: 'Admin',
      lastName: 'Admin',
      email: 'chana@azurbnk.com',
      password: '12345678',
      roles: [ 'admin' ],
      stocks: [],
      transactions: [],
    }
  });

  // login as admin
  await payload.login({
    collection: 'users',
    data: {
      email: 'chana@azurbnk.com',
      password: '12345678',
    }
  });

  // create a stock
  const stock1 = await payload.create({
    collection: 'stocks',
    data: {
      name: 'Rami Levi',
      hebrewName: 'רמי לוי',
      capital: 2850168000,
      symbol: 'RMLI',
      historicPrices: [
        {
          date: '2023-03-09',
          price: 21240.00,
        },
        {
          date: '2023-03-02',
          price: 20460.00,
        },
      ],
    },
  });

  // create a stock
  const stock2 = await payload.create({
    collection: 'stocks',
    data: {
      name: 'Emilia Development (O.F.G) LTD.',
      hebrewName: 'אמיליה פיתוח',
      capital: 569673000,
      symbol: 'EMDV',
      historicPrices: [
        {
          date: '2023-03-09',
          price: 2035.00,
        },
        {
          date: '2023-03-02',
          price: 2029.00,
        },
      ],
    },
  });

  // create a stock
  const stock3 = await payload.create({
    collection: 'stocks',
    data: {
      name: 'TEVA - PHARMACEUTICAL INDUSTRIES LTD.',
      hebrewName: 'טבע תעשיות פרמצבטיות בע"מ',
      capital: 37911345000,
      symbol: 'TEVA',
      historicPrices: [
        {
          date: '2023-03-09',
          price: 3413.00,
        },
        {
          date: '2023-03-02',
          price: 3635.00,
        },
      ],
    },
  });

  // create a stock
  const stock4 = await payload.create({
    collection: 'stocks',
    data: {
      name: 'ADGAR INV.',
      hebrewName: 'אדגר',
      capital: 722892000,
      symbol: 'ADGR',
      historicPrices: [
        {
          date: '2023-03-09',
          price: 438.5,
        },
        {
          date: '2023-03-02',
          price: 436.4,
        },
      ],
    },
  });

  // create a user
  const user1 = await payload.create({
    collection: 'users',
    data: {
      username: 'ישראל מאיר',
      lastName: 'מאייר',
      email: 'YSRL@azurbnk.com',
      password: '12345678',
      roles: [ 'kid' ], accountId: 'YSRL',
      stocks: [
        {
          quantity: 1.5,
          stock: stock2.id,
          dividends: [],
        },
        {
          quantity: 2,
          stock: stock4.id,
          dividends: [],
        },
      ],
      transactions: [],
    },
  });

  // create a user
  const user2 = await payload.create({
    collection: 'users',
    data: {
      username: 'גפן',
      lastName: 'ברמסון',
      email: 'GFN@azurbnk.com',
      password: '12345678',
      roles: [ 'kid' ],
      accountId: 'GFN',
      stocks: [
        {
          quantity: 1,
          stock: stock2.id,
          dividends: [],
        },
        {
          quantity: 0.333,
          stock: stock3.id,
          dividends: [],
        },
      ],
      transactions: [],
    },
  });

  // create a user
  const user3 = await payload.create({
    collection: 'users',
    data: {
      username: 'הדסה',
      lastName: 'שורק',
      email: 'HDS@azurbnk.com',
      password: '12345678',
      roles: [ 'kid' ],
      accountId: 'HDS',
      stocks: [
        {
          quantity: 1,
          stock: stock2.id,
          dividends: [],
        },
        {
          quantity: 0.04,
          stock: stock1.id,
          dividends: [],
        },
      ],
      transactions: [],
    },
  });

  // create a dividend
  const dividend1 = await payload.create({
    collection: 'dividends',
    data: {
      date: '2023-03-09',
      dividend: 100,
      quarter: 'Q1',
      stock: stock2.id,
    },
  });
};