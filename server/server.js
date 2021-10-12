const express = require("express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");
// import ApolloServer
const { ApolloServer } = require("apollo-server-express");

// import our typeDefs and resolvers
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

// create a new Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

async function start() {
  await server.start();
  server.applyMiddleware({ app });
}
start();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
// }
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });


db.once("open", () => {
  // integrate our Apollo server with the Express application as middleware
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});



// const { createServer } = require('http')
// const { execute, subscribe } = require('graphql');
// const { SubscriptionServer } = require('subscriptions-transport-ws');
// const { makeExecutableSchema } = require('@graphql-tools/schema')
// const express = require("express");
// const path = require("path");
// const { authMiddleware } = require("./utils/auth");
// const PORT = process.env.PORT || 4000;

// // import ApolloServer
// const { ApolloServer } = require("apollo-server-express");

// // import our typeDefs and resolvers
// const { typeDefs, resolvers } = require("./schemas");
// const db = require("./config/connection");

// (async function () {
//   const app = express();

//   const httpServer = createServer(app);

//   const schema = makeExecutableSchema({
//     typeDefs,
//     resolvers,
//   });

  // const server = new ApolloServer({
  //   schema,
  //   plugins: [{
  //     async serverWillStart() {
  //       return {
  //         async drainServer() {
  //           subscriptionServer.close();
  //         }
  //       };
  //     }
  //   }],
  // });

  // const subscriptionServer = SubscriptionServer.create(
  //   { schema, execute, subscribe },
  //   { server: httpServer, path: '/subscriptions' }
  // );

//   await server.start();
//   server.applyMiddleware({ app });

//   if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "../client/build")));
//   }
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
//   });

//   db.once("open", () => {
//     // integrate our Apollo server with the Express application as middleware
//     httpLink.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//       // log where we can go to test our GQL API
//       console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//     })
//   });
// })();
