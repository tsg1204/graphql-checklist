import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://tsg-todo-graphql2.herokuapp.com/v1/graphql',
  cache: new InMemoryCache()
})

client.query({
  query: gql`
    query getTodos {
      todos {
        done
        id
        text
      }
  }`
}).then(data => console.log(data))

ReactDOM.render(<App />,document.getElementById('root'));

