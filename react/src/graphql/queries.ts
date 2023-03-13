import { gql } from '@apollo/client';
import { gql as gql2 } from '__generated__/gql';
import { CORE_USER_FIELDS, CORE_STOCK_FIELDS } from './fragments';

export const USERS = gql2(/* GraphQL */ `
  ${CORE_USER_FIELDS}
  ${CORE_STOCK_FIELDS}
  query Users(where: {
    roles_contains: "kid"
  }) {
    users {
      ...CoreUserFields
      userDetails {
        accountId
        birthday
        portfolioValue
        balance
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

export const STOCKS = gql2(/* GraphQL */ `
  query Stocks {
    Stocks(sort: "hebrewName") {
      docs {
        DPR
        ISIN
        PE
        capital
        dividends {
          id
          dividend {
            id
            date
            dividend
            quarter
            xDate
          }
        }
        id
        issuerId
        name
        securityId
      }
    }
  }
`);

export const GET_ALL_STOCKS = gql`
  query Stocks {
    Stocks(sort: "hebrewName") {
      data {
        id
        attributes {
          companyName
          currency
          dividends {
            id
            date
            percentage
            sum
            xDate
          }
          DPR
          hebrewName
          historicPrices {
            id
            date
            stockPrice
          }
          isin
          issuerId
          marketValue
          PE
          securityId
          symbol
        }
      }
    }
  }
`;

export const GET_ALL_USERS = gql`
  query Users{
    Users {
      docs {
        username
        lastName
        id
        email
      }
    }
  }
`;

export const GET_USER = gql`
  query user($id: ID!) {
    usersPermissionsUser(id: $id) {
      data {
        id
        attributes {
          actions {
            amount
            date
            status
            stock {
              data {
                id
                attributes {
                  companyName
                  hebrewName
                  historicPrices {
                    id
                    date
                    stockPrice
                  }
                  symbol
                }
              }
            }
            stockPrice
            type
          }
          balance
          birthday
          createdAt
          email
          username
          gender
          joinDate
          lastName
          role {
            data {
              attributes {
                name
              }
            }
          }
          stocks {
            amount
            stock {
              data {
                id
                attributes {
                  companyName
                  hebrewName
                  historicPrices {
                    id
                    date
                    stockPrice
                  }
                  symbol
                }
              }
            }
          }
          username
        }
      }
    }
  }
`;

export const ME = gql`
  query me {
    me {
      id
      username
      email
      role {
        data {
          attributes {
            name
          }
        }
      }
    }
  }
`;