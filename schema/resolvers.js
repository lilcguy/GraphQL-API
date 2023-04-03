

import books from '../models/Book.js';
import users from '../models/User.js';


const resolvers = {

    Query: {
  
      books: function () {
        return books;
      },

      users: function () {
        return users;
      }
  
    },
  
  };

  export default resolvers;