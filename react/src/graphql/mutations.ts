import { gql } from '@apollo/client';
import './types.ts';

export const LOGIN = gql`
  mutation loginUser($email: String, $password: String) {
    loginUser(email: $email, password: $password){
      token
      exp
      user {
        id
      }
    }
  }
`;
