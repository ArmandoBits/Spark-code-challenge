import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { connectToDatabase } from "./database/connection";
import { AuthResolver } from "./resolvers/AuthResolver";

const startServer = async () => {
  const dbConnection = await connectToDatabase();
  console.log("Connected to the database!");

  const schema = await buildSchema({
    resolvers: [AuthResolver],
  });

  const server = new ApolloServer({ schema });
  
  server.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
  });
};

startServer();
