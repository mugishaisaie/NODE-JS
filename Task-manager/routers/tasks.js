const express = require('express');
const router = express.Router();
const {getAllTasks,createTasks,getTask,updateTasks,deleteTask} = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTasks);
router.route('/:id').get(getTask).patch(updateTasks).delete(deleteTask)

module.exports = router;