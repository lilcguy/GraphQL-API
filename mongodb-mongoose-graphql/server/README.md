# Server

## Description
This is the backend of the application.
It includes the following:

server.js
    -handles DB connection, server starting with apollo and epxress

# Package.json

## Dependencies
the backend uses the following dependencies:

express
apollo-server-express
graphQL
mongoose

## Scripts
The following scripts were added: 
"develop": "concurrently \"cd server && npm run start\" \"cd client/my-react-app && npm start\"",

### devDepdencies:
concurrently


#### Side notes:
Package.json in the challenge 21 example has a package.json in front end, backend, and in root.
it makes sense to have a package.json in root that holds a script with concurrently that navigates to backend to start server and frontend to start.
# NOTE: IT MUST BE IN ROOT IN ORDER TO NAVIGATE PROPERLY.