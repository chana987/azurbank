import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation loginUser($email: String, $password: String){
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
          stock {
            id
            hebrewName
            symbol
            historicPrices(limit: 1, sort: "date:desc") {
              date
              price
            }
          }
          quantity
        }
        transactions {}
    }
  }
}`;
