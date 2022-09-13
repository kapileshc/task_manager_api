const getAllTasks = (req,res) =>{
    res.send('all items')
}

const createTask = (req,res) =>{
    res.send('hello create')
    console.log({...req.body})
    res.json(req.body)
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