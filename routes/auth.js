const express = require('express');
const { route } = require('./people');
const router = express.Router();

route.post('/',(req,res)=>{
    console.log(req.body)

    const {name} = req.body;
    if(!name){
        return res.status(400).json('Name is required')
    }
    res.json(`Hey ${name} You have successfully logged in!`)

})

module.exports = router;