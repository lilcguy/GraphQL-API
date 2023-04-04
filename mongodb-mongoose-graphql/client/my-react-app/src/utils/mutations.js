import { gql } from '@apollo/client';

export const ADD_USER = gql `

mutation addUser($email: String, $username: String) {
  addUser(email: $email, username: $username) {
    _id
    email
    username
  }
}


`;