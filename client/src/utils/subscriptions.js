import {gql} from '@apollo/client'

export const TASK_SUB = gql`
subscription taskFeed{
    taskFeed {
      _id
      title
      importance
      createdAt
    }
  }
`