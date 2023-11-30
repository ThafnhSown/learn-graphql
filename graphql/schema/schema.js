const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        id: ID!
        username: String
        name: String
        address: Address
        phone: String
        posts: [Post]
    }

    type Address {
        street: String
        suite: String
        city: String
    }
    
    type Post {
        id: ID
        title: String
        body: String
        user: User
    }
    
    type Query {
        user(id: ID!): User
        users: [User]
        post(id: ID!): Post
        posts: [Post]
    }
`
module.exports = typeDefs