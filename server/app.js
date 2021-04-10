const express = require("express");
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/graphql-demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});
mongoose.connection.once('open', () => {
    console.log('connected to database');
})

app.use("/graphql",graphqlHTTP({
    schema
}));

app.listen(4000, () => {
    console.log("now listening for requests on port 4000");
});