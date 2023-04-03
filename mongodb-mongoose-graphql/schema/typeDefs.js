const { gql } = require('apollo-server-express');

const typeDefs = gql `

type User {
    _id: ID
    username: String
    email: String
}

type Thought {
    thoughtText: String
    username: String
}

type Query {
    users: [User]
    thoughts: [Thought]
}

type Mutation {
    addUser(username: String email: String): User
}

`;

module.exports = typeDefs;