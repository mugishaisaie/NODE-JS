
require('dotenv').config();
const mongoose = require('mongoose');

const connectionString = process.env.CONNECT_STRING;

mongoose.connect(connectionString).then(()=>console.log("Connected to the database")).catch((err)=>console.log("There error happen is :",err));