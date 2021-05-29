import { ApolloServer, gql } from "apollo-server";

const server = new ApolloServer({

});

server.listen().then(() => console.log(`Server is running on http://localhost:4000/`));