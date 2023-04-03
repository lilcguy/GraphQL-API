//front end 
//The queries defined here are what are sent to the API to receive data back.
//like in the playground, when you are selecting the data you want to query, that is what is happening here on the front end.

//the actual query itself is COPY AND PASTED from the apollo playground that runs on the localhost.

import { gql } from '@apollo/client';

export const GET_USERS = gql `
    query getUsers {
    users {
    _id
     email
     username
        thoughts {
            _id
        }
        
  }
}

    
`;