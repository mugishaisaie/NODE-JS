
require('dotenv').config();
const mongoose = require('mongoose');

const connectionString = process.env.CONNECTION_STRING;
// console.log("Connection String:", connectionString);
const connectDb = (url) => {

   return mongoose.connect(connectionString,{
        useNewUrlParser: true,
      useUnifiedTopology: true
    })
}

module.exports = connectDb;