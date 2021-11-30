import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://eminent-chigger-36.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
});

export default client;
