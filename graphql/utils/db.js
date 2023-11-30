const User = require('../models/user.model')
const Post = require('../models/post.model')

const mongoDataMethods = {
    getAllUsers: async() => await User.find(), 
    getUserById: async id => await User.findById(id),
    getAllPosts: async (condition = null) => 
        condition === null ? await Post.find() : await Post.find(condition),
    getPostById: async id => await Post.findById(id)
}

module.exports = mongoDataMethods