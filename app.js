// Express

const express = require('express');
const app = express();
const peopleRouter = require('./routes/people')
const authRouter = require('./routes/people')

// parse formdata
app.use(express.urlencoded({extended:false}))

// run all static files from methods-public folder
// this is used to serve static files like css, js, images etc.
app.use(express.static('./methods-public'))

// parse json

app.use(express.json());

app.use('/api/people',peopleRouter)
app.use('/login',authRouter)






app.listen(3000, () => {
    console.log('Server is running on port 3000');
})