const User = require('../models/User');

const resolvers = {
    Query: {
        users: async function() {
            try {
                let userData = await User.find({});
                    return userData;
            } catch (err) {
                console.log(err);
            }
        }

    },

    Mutation: {
        addUser: async function(parent, args) {
            const { username, email } = args
        try {
            let userData = await User.create({username, email});
                return userData;
        } catch (err) {
            console.log(err);
        }

        }

    }
}

module.exports = resolvers;