# Client

## Description
In here is found the React app, handling the front end of the application.

It was all created using the command 'npx create-react-app my-react-app' 
with 'my-react-app' being the name of the app the command creates.

# Dependencies
The following dependencies were added after the initial installation:

    -react-router-dom (for routing)
    -@apollo/client

    it is imported in the App.js file like so:
        import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

# Package.json
The following was added to the package.json after the fact:

proxy property:
    "proxy": 

the server in the backend activates on port 3001. React uses 3000 by default. So we use proxy so they match.

# App.js
The following imports were added to connec the client to React:
                        https://www.apollographql.com/docs/react/get-started/
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,

