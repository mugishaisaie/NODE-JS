const express = require('express');
const app = express();

require('dotenv').config();
app.use(express.static('./public'))

app.use(express.json());

const taskRouter = require('./routers/tasks');

const connectDB = require('./db/connect');


app.use('/api/v1/tasks',taskRouter)


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