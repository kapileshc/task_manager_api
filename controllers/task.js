const Task = require('../model/task')
const getAllTasks = async (req,res) =>{
    try {
        const task = await Task.find({})
        res.status(200).json({task})
    } catch (error) {
        res.send(500).json({msg:error})
    }
}

const createTask = async (req,res) =>{
    try {
        const task = await Task.create(req.body)
    res.status(201).json(task)
    } catch (error) {
        res.status(500).json(error.errors.name.message)
    }
    
}

const getTask = (req,res) =>{
    res.send(req.params.id)
}

const updateTask = (req,res) =>{
    res.send('update task')
}

const deleteTask = (req,res) =>{
    res.send('delete task')
}



module.exports = {getAllTasks,getTask,createTask,updateTask,deleteTask}