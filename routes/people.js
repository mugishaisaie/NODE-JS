const express = require('express');

const router = express.Router();
const {people} = require('../data');


router.get('/', (req, res) => {
    res.status(200).json({success: true, data: people});
});
router.post('/', (req, res) => {
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success:false, msg:'Please provide name value'})
    }
    res.status(200).json({success: true, person:name})
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    const persons = people.find((person)=>person.id === Number(id));
    if(!persons){
        return res.status(404).json({success:false,msg:`No person with id ${id}`})
    }

    const newPerson = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name;
        }
        return person;
    })
    res.status(200).json({success:true, data: newPerson})
})
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    const persons = people.find((person)=>person.id === Number(id));
    if(!persons){
        return res.status(404).json({success:false,msg:`No person with id ${id}`})
    }

    const newPerson = people.filter((person)=>person.id !== Number(id));
    res.status(200).json({success:true, data: newPerson})
})
module.exports = router;