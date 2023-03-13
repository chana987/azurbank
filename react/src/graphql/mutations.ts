import { gql } from '@apollo/client';
import { gql as gql2 } from '__generated__/gql';

export const LOGIN = gql2(/* GraphQL */ `
  mutation loginUser($email: String, $password: String) {
    loginUser(email: $email, password: $password){
      token
      exp
      user {
        id
        username
        lastName
        roles
        email
        userDetails {
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
              historicPrices {
                date
                price
              }
            }
          }
          transactions {
            type
            status
            sum
            date
            stock {
              id
              hebrewName
              symbol
            }
            quantity
          }
        }
      }
    }
  }
`);
