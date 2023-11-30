const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const cors = require('cors')

const typeDefs = require("./schema/schema")
const resolvers = require("./schema/resolver")

const mongoDataMethods = require("./utils/db")
const PORT = process.env.PORT || 3001
require('dotenv').config()
require('./database/init.mongodb')

async function startApolloServer(typeDefs, resolvers){
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: () => ({mongoDataMethods})
    })
    const app = express();
    await server.start();
    server.applyMiddleware({app, path: '/graphql'});
    
    app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}${server.graphqlPath}`);
})
}
startApolloServer(typeDefs, resolvers)