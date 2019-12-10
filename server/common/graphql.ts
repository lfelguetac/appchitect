// import { graphql, buildSchema } from "graphql";

// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// const root = { hello: () => 'Hello world!' };


// graphql(schema, '{ hello }', root).then((response) => {
//   console.log(response);
// });

import graphqlHTTP = require('express-graphql');
import { buildSchema } from 'graphql';

export function applyGraphqlMiddleware( app ){
  
  const schema = buildSchema(`
    type Query {
      saludo: String
    }
  `);
  
  const root = { 
    saludo: () => 'Esto es una prueba de humo.' 
  
  };


// docker tag ms-parametricas 200.0.0.41:8080/nexus/repository/trebol-develop/ms-parametricas


  app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }));

}
   