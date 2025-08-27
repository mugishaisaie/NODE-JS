const express = require('express');
const app = express();

const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

require('dotenv').config();

// middleware
app.use(express.static('./public'))
app.use(express.json());
        
const taskRouter = require('./routers/tasks');

const connectDB = require('./db/connect');


app.use('/api/v1/tasks',taskRouter)
app.use(notFound)
app.use(errorHandlerMiddleware)


const start = async () => {
    try {
        await connectDB(process.env.CONNECTION_STRING);

        app.listen(3000, () => {
            console.log(`Server is running on port 3000`);
        })
        
    } catch (error) {
        console.log(error)
        
    }
}

start();