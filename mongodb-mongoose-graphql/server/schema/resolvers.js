const User = require('../models/User');
const Thought = require('../models/Thought');

const resolvers = {
    Query: {
        users: async function() {
            try {
                let userData = await User.find({}).populate('thoughts');
                    return userData;
            } catch (err) {
                console.log(err);
            }
        },
        user: async function(parent, args) {
            const { _id } = args;
            try {
                let userData = await User.findById(_id);
                    return userData;
            } catch (err) {
                console.log(err);
            }
        },
        thoughts: async function() {
            try {
                const thoughtData = await Thought.find({});
                    return thoughtData;
            } catch (err) {
                console.log(err);
            }
        }

    },

    Mutation: {
        addUser: async function(parent, args) {
            const { username, email } = args;
        try {
            let userData = await User.create({username, email});
                return userData;
        } catch (err) {
            console.log(err);
        }

        },
        addThought: async function(parent, args) {

            //find the user by username
            //create the thought
            //update the user;s thoughts array

            const {thoughtText, username} = args;
                try {
                    let user = await User.findOne({username: username});

                    let newThought = await Thought.create({thoughtText, username});

                    const update = await User.findOneAndUpdate(
                        {_id: user._id}, //where
                        {$push: {thoughts: newThought._id}}, //teh action
                        {new: true} //return the new data
                    );
                    return update;

                } catch (err) {
                    console.log(err);
                }
        }
        

    }
}

module.exports = resolvers;