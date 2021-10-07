import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;
;

export const CREATE_TASK_MUTATION = gql`
mutation createTask($title: String!, $importance: String!) {
  createTask(title: $title, importance: $importance) {
    _id
    title
    importance
  }
}
`

export const DELETE_TASK = gql`
mutation deleteTask($id: ID!) {
  deleteTask(id: $id) {
    _id
    title
    importance
    createdAt
  }
}
`