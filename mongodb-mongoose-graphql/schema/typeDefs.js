const { gql } = require('apollo-server-express');

const typeDefs = gql `

type User {
    _id: ID
    username: String
    email: String
}

type Thought {
    _id: ID
    thoughtText: String
    username: String
}

type Query {
    users: [User]
    thoughts: [Thought]
    user(_id: ID): User
}

type Mutation {
    addUser(username: String email: String): User
}

`;

module.exports = typeDefs;