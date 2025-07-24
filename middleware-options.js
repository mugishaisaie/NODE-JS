// Express

const express = require('express');
const app = express();

const morgan = require('morgan')

const logger = require('./middleware')
const authorize = require('./authorize')
// Middleware
// req => Middleware =>res
// app.use([logger,authorize])


app.use(morgan('tiny'))
app.get('/', (req, res) => {
    res.send("<h1>Welcome to Our Website</h1>")
})
app.get('/about', (req, res) => {
    res.send("<h1>About Us</h1>")
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})