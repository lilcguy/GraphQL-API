const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers');

async function startApolloServer() {

const server = new ApolloServer({
    typeDefs,
    resolvers
});

await mongoose.connect('mongodb://127.0.0.1:27017/testDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const app = express();

await server.start();

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
    });

}

startApolloServer();