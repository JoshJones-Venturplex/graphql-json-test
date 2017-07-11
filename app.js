const express = require('express');
const graphQLHTTP = require('express-graphql');
const schema = require('./schema');

const app = express();

app.use('/graphql', graphQLHTTP({
  schema: schema.schema,
  graphiql: true
}));

app.listen(
  3000,
  () => console.log('live'));