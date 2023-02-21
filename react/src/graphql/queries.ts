import { gql } from '@apollo/client';

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
        firstName
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
          firstName
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