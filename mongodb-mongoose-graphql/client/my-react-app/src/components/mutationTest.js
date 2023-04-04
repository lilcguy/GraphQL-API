import React, { useState, useEffect } from 'react';

import { useMutation } from '@apollo/client';

import { ADD_USER } from '../utils/mutations';

import {GET_USERS} from '../utils/queries';


//https://www.apollographql.com/docs/react/data/mutations/#executing-a-mutation

function MutationTest() {
        const [addUser, { loading, error, data}] = useMutation(ADD_USER, {
                 refetchQueries: [
                 {query: GET_USERS},
                 ]
                });

        useEffect(() => {
            if (data) {
            setEmail('');
            setUsername('');
            }
        }, [data]);

       const [email, setEmail] = useState(''); //track state of forms

       const [username, setUsername] = useState(''); //track state of forms

         if (loading) return 'Submitting...';

         if (error) return `Submission error! ${error.message}`;

        const handleEmailChange = function(e) { //track state of forms
            setEmail(e.target.value);

        };

        const handleUsernameChange = function (e) { //track state of forms
            setUsername(e.target.value);
        };

        const handleFormSubmit = async function(e) {
            e.preventDefault();

            let user = await addUser({
                variables: {
                    email: email, 
                    username: username 
                }
            });

        console.log(user);  

    };

     return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input onChange={handleEmailChange} placeholder="email" className="email"></input>
                    <div>
                    <input  onChange={handleUsernameChange} placeholder="username" className="username"></input>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
            
        </div>

        )
}

export default MutationTest;