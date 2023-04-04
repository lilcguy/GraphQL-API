import React, { useState } from 'react';

import { useMutation } from '@apollo/client';

import { ADD_USER } from '../utils/mutations';

//https://www.apollographql.com/docs/react/data/mutations/#executing-a-mutation

function MutationTest() {
        const [addUser, { loading, error, data}] = useMutation(ADD_USER);


       const [email, setEmail] = useState(''); //track state of forms

       const [username, setUsername] = useState(''); //track state of forms

        // if (loading) return 'Submitting...';

        // if (error) return `Submission error! ${error.message}`;

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

     return (
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

        )
}

export default MutationTest;