import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  {
    user {
      _id
      username
      email
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          price
          unit
        }
      }
    }
  }
`;

export const QUERY_TASK = gql`
{
  task(sortBy: { field: "createdAt", order: DESC }) {
    _id
    title
    importance
    createdAt
  }
}
`