const express = require('express');
const app = express();

app.use(express.json());
const taskRouter = require('./routers/tasks');

require('./db/connect');


app.use('/api/v1/tasks',taskRouter)

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
})