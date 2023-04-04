// test to learn about GraphQL backend querying.

/* 
Whenever this component renders, the useQuery 
hook automatically executes our query and returns a result object containing loading, 
error, and data properties.
*/

import React, { useState } from 'react';


import { useQuery, useMutation } from '@apollo/client';
    //useQuery hook import from apollo.
        //The useQuery React hook is the primary API for executing queries in an Apollo application.
            //The useQuery hook is a React hook that shares GraphQL data with your UI.

import { GET_USERS } from '../utils/queries';

import { ADD_USER } from '../utils/mutations';

function QueryAndMutationTest() {

    const [addUser] = useMutation(ADD_USER, {
        refetchQueries: [
            {query: GET_USERS},
        ],
    });

    const [email, setEmail] = useState(''); //tracks state of forms or submission

    const [username, setUsername] = useState(''); //tracks state of forms for submission

     const handleEmailChange = function(e) { //track state of forms
         setEmail(e.target.value);

     };

     const handleUsernameChange = function (e) { //track state of forms
         setUsername(e.target.value);
     };

     const handleFormSubmit = function(e) {
         e.preventDefault();

         addUser({
             variables: {
                 email: email, 
                 username: username 
             }
         }).then(() => {
             setEmail('');
             setUsername('');
         }).catch((err) => {
             console.log(err);
         });


     };

    const { loading, error, data } = useQuery(GET_USERS);
    // Apollo Client automatically tracks a query's loading and error states, which are reflected in the loading and error properties.
        // When the result of your query comes back, it's attached to the data property.

       // *** data is an object returned from the query. in that object is users, which is an array in this case. */
            //see in public folder the picture of the playground.
        //.map() method takes a function as an argument.

        //in theory, you can map over the user's thoughts array.


    if (loading) return <p> Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div>
            <h1>results of query are below</h1>
            <div id='results'>
                {data.users.map((user) => {
                    return (
                    <div>
                        <div>
                            <h1>USER:</h1>
                                <h2>{user._id}</h2>
                                <h2>{user.email}</h2>
                                <h2>{user.username}</h2>
                        </div>
                    
                    </div>

                    );
                })}
                    <div>
                        <h1>Add User Form</h1>
                        <div>
                            <form onSubmit={handleFormSubmit}>
                                <div>
                                        <input onChange={handleEmailChange} placeholder="email" class="email"></input>
                                    <div>
                                        <input  onChange={handleUsernameChange} placeholder="username" class="username"></input>
                                    </div>
                                </div>
                                    <button type="submit">Submit</button>
                            </form>
            
                        </div>
                    </div>
            </div>
                

        </div>
    );
};

export default QueryAndMutationTest;