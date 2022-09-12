const express = require('express')
const app = express()
const tasks = require('./routes/task')
const port = 3000

app.use('/api/v1/tasks',tasks)

app.get('/',(req,res)=>{
    res.send("hello world")
})
app.listen(port,()=>{console.log(`server is running successfully at ${port}`)})
