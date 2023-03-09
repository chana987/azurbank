import { Payload } from 'payload';
import { User, Stock, Dividend, Transaction } from './payload-types';

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
      roles: ['admin'],
      userDetails: {
        accountId: 'admin',
        stocks: [],
        dividends: [],
      },
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
      marketValue: 2850168000,
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
      dividends: [
      ],
    },
  });

  // create a stock
  const stock2 = await payload.create({
    collection: 'stocks',
    data: {
      name: 'Emilia Development (O.F.G) LTD.',
      hebrewName: 'אמיליה פיתוח',
      marketValue: 569673000,
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
      dividends: [
      ],
    },
  });

  // create a stock
  const stock3 = await payload.create({
    collection: 'stocks',
    data: {
      name: 'TEVA - PHARMACEUTICAL INDUSTRIES LTD.',
      hebrewName: 'טבע תעשיות פרמצבטיות בע"מ',
      marketValue: 37911345000,
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
      dividends: [
      ],
    },
  });

  // create a stock
  const stock4 = await payload.create({
    collection: 'stocks',
    data: {
      name: 'ADGAR INV.',
      hebrewName: 'אדגר',
      marketValue: 722892000,
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
      dividends: [
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
      roles: [ 'kid' ],
      userDetails: {
        accountId: 'YSRL',
        stocks: [
          {
            amount: 1.5,
            stockId: stock2.id,
          },
          {
            amount: 2,
            stockId: stock4.id,
          },
        ],
        dividends: [
        ],
      },
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
      userDetails: {
        accountId: 'GFN',
        stocks: [
          {
            amount: 1,
            stockId: stock2.id,
          },
          {
            amount: 0.333,
            stockId: stock3.id,
          },
        ],
        dividends: [
        ],
      },
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
      userDetails: {
        accountId: 'HDS',
        stocks: [
          {
            amount: 1,
            stockId: stock2.id,
          },
          {
            amount: 0.04,
            stockId: stock1.id,
          },
        ],
        dividends: [
        ],
      },
    },
  });
};