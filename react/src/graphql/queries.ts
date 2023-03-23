import { gql } from '@apollo/client';
import './types.ts';

export const STOCK = gql`
  query Stock($id: String!) {
    Stock(id: $id) {
      id
      hebrewName
      symbol
      latestPrice
      PE
      DPR
      capital
      historicPrices {
        id
        date
        price
      }
      dividends {
        id
        date
        quarter
        dividend
      }
      users {
        id
        username
        lastName
      }
    }
  }
`;

export const STOCKS = gql`
  query Stocks {
    Stocks {
      docs{
        id
        hebrewName
        symbol
        latestPrice
        capital
      }
      totalDocs
    }
  }
`;

export const USER = gql`
  query User($id: String!) {
    User(id: $id) {
      id
      username
      lastName
      roles
      email
      accountId
      birthday
      portfolioValue
      balance
      stocks {
        id
        quantity
        stock {
          id
          hebrewName
          symbol
          latestPrice
          capital
        }
      }
    }
  }
`;

export const USERS = gql`
  query Users {
    Users(where: { roles: { in: kid } }) {
      docs {
        id
        birthday
        username
        lastName
        roles
        accountId
        portfolioValue
      }
      totalDocs
    }
  }
`;
