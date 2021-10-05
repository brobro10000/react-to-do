const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Task {
    _id: ID
    title: String
    importance: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
    task: [Task]
  }

  type Mutation {
    createTask(title: String!, importance:String!): Task
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
