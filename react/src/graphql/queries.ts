import { gql } from '__generated__/gql';
import { CORE_STOCK_FRAGS, CORE_USER_FRAGS } from './fragments';

export const STOCKS = gql(/* GraphQL */ `
  ${CORE_STOCK_FRAGS}
  query Stocks {
    Stocks(sort: "hebrewName") {
      ...CoreStockFields
    }
  }
`);

export const GET_ALL_STOCKS = gql(/* GraphQL */ `
  ${CORE_STOCK_FRAGS}
  query Stocks {
    Stocks(sort: "hebrewName") {
      ...CoreStockFields
    }
  }
`);

export const GET_USER = gql(/* GraphQL */ `
  ${CORE_USER_FRAGS}
  ${CORE_STOCK_FRAGS}
  query User(where: {
    roles_contains: "kid"
  }) {
    User {
      ...CoreUserFields
      userDetails {
        ...UserDetailsFields
        stocks {
          id
          quantity
          stock {
            ...CoreStockFields
          }
        }
      }
    }
  }
`);

export const GET_ALL_USERS = gql(/* GraphQL */ `
  ${CORE_USER_FRAGS}
  ${CORE_STOCK_FRAGS}
  query Users(where: {
    roles_contains: "kid"
  }) {
    Users {
      docs {
        ...CoreUserFields
        userDetails {
          ...UserDetailsFields
          stocks {
            id
            quantity
            stock {
              ...CoreStockFields
            }
          }
        }
      }
      totalDocs
    }
  }
`);
