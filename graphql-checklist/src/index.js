import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://tsg-todo-graphql2.herokuapp.com/v1/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, 
  document.getElementById('root')
);

// client.query({
//   query: gql`
//     query getTodos {
//       todos {
//         done
//         id
//         text
//       }
//   }`
// }).then(data => console.log(data))