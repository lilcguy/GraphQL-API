
import './App.css';

import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import queryTest
import QueryAndMutationTest from './components/queryAndMutationTest'; //react components must start with a capital letter.
import MutationTest from './components/mutationTest';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

/*
const link = createHttpLink({
  uri: '/graphql',
  credentials: 'same-origin'

});
*/ //see challenge 21 for why i commented this out: they define it separately from apolloclient() in order to use authentication middleware before each request.
const client = new ApolloClient({

  uri: '/graphql', //server runs on: http://localhost:4000/graphql thats why its /graphql.
  cache: new InMemoryCache(), //cache is an instance of InMemoryCache, which Apollo Client uses to cache query results after fetching them.

});


    //useQuery hook import from apollo.
        //The useQuery React hook is the primary API for executing queries in an Apollo application.
            //The useQuery hook is a React hook that shares GraphQL data with your UI.

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Front end </h1>
      </div>
      <QueryAndMutationTest></QueryAndMutationTest>
      
      
    </ApolloProvider>
  );
}

export default App;

//note: be in the correct directory for this: be in the my-react-app directory in the case for the practice react application.