import { gql } from '@apollo/client';

export const CORE_USER_FRAGS = gql(/* GraphQL */ `
  fragment CoreUserFields on User {
    id
    username
    lastName
    roles
    email
  }
  fragment UserDetailsFields on UserDetails {
    accountId
    birthday
    portfolioValue
    balance
  }
`);

export const CORE_STOCK_FRAGS = gql(/* GraphQL */ `
  fragment CoreStockFields on Stock {
    id
    hebrewName
    symbol
    latestPrice
  }
  fragment StockDetailsFields on Stock {
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
`);