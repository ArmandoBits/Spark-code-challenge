"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_1 = require("apollo-server");
const type_graphql_1 = require("type-graphql");
const connection_1 = require("./database/connection");
const AuthResolver_1 = require("./resolvers/AuthResolver");
const startServer = async () => {
    const dbConnection = await (0, connection_1.connectToDatabase)();
    console.log("Connected to the database!");
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [AuthResolver_1.AuthResolver],
    });
    const server = new apollo_server_1.ApolloServer({ schema });
    server.listen(4000, () => {
        console.log("Server running on http://localhost:4000");
    });
};
startServer();
