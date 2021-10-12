import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  split
} from "@apollo/client";
import { getMainDefinition } from '@apollo/client/utilities';
import { setContext } from "@apollo/client/link/context";
import { Provider } from "react-redux";
import store from "./utils/store";
import index from './pages';
import { WebSocketLink } from '@apollo/client/link/ws'

// import Loading from "./components/Loading";
const httpLink = createHttpLink({
  uri: "graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});





// const wsLink = new WebSocketLink({
//   uri:'subscriptions',
//   options: {
//     reconnect:true
//   }
// });

// const httpLink = createHttpLink({
//   uri: "graphql",
// });

// const splitLink = split(
//   ({query}) => {
//     console.log(query)
//     const definition = getMainDefinition(query);
//     console.log(definition)
//     return(
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     );
//   },
//   wsLink,
//   httpLink
// )

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem("id_token");
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <div className="wrapper">
      <ApolloProvider client={client}>
        <Router>
          <Provider store={store}>
            <Route exact path="/" component={index} />
          </Provider>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
