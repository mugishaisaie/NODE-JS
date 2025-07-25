// Express

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
})
app.get('/about',(req,res)=>{
    res.status(200).send('<h1>About Page</h1>');
})

// app.all('*',(req,res)=>{
//     res.status(404).send('<h1>Page Not Found!</h1>');
// })

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})