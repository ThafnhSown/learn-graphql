const { Types } = require("mongoose");

const resolvers = {
    Query: {
        users: async (parent, args, { mongoDataMethods }) =>
			await mongoDataMethods.getAllUsers(),
        user: async (parent, {id}, { mongoDataMethods }) =>
            await mongoDataMethods.getUserById(id),
        posts: async (parent, args, { mongoDataMethods }) =>
			await mongoDataMethods.getAllPosts(),
        post: async (parent, {id}, { mongoDataMethods }) =>
            await mongoDataMethods.getPostById(id)
    },

    User: {
        posts: async({id}, args, {mongoDataMethods}) => 
            await mongoDataMethods.getAllPosts({ userId: id})
    },

    Post: {
        user: async({userId}, args, {mongoDataMethods}) =>
            await mongoDataMethods.getUserById(userId)
    }
}

module.exports = resolvers