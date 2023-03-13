import { gql } from '@apollo/client';

export const CORE_USER_FIELDS = gql(/* GraphQL */ `
  fragment CoreUserFields on User {
    id
    username
    lastName
    roles
    email
  }
`);

export const CORE_STOCK_FIELDS = gql(/* GraphQL */ `
  fragment CoreStockFields on Stock {
    id
    hebrewName
    historicPrices {
      id
      date
      price
    }
    symbol
  }
`);