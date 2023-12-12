import React from "react";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
  ApolloLink
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context'
const key_name = 'post_blog_storage'
const database_url_public = "https://blog-site-demo-server.vercel.app/api/graphql";
const database_url_local = "http://localhost:8001/api/graphql";

const httpLink = createHttpLink({
  uri: database_url_local
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem(key_name);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

// const roundTripLink = new ApolloLink((operation, forward) => {
//   // Called before operation is sent to server
//   operation.setContext({ start: new Date() });

//   return forward(operation).map((data) => {
//     // Called after server responds
//     const time = new Date() - operation.getContext().start;
//     console.log(`Operation ${operation.operationName} took ${time} to complete`);
//     return data;
//   });
// });

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
 
});






