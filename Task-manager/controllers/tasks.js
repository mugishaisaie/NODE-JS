const getAllTasks = (req,res)=>{
    res.send("Get all tasks from here");
}
const createTasks = (req,res)=>{
    res.json(req.body);
}
const getTask = (req,res)=>{
    res.send({id: req.params.id});
}
const updateTasks = (req,res)=>{
    res.json({id: req.params.id});
}
const deleteTask = (req,res)=>{
    res.send("Delete Tak Here");
}


module.exports = {
    getAllTasks,
    createTasks,
    getTask,updateTasks,
    deleteTask
}