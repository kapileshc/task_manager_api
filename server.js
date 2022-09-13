require('./db/connection')
const express = require('express')
const app = express()
const tasks = require('./routes/task')
const connectDB = require('./db/connection')
const port = 3000
require('dotenv').config()

app.use(express.json())
app.use('/api/v1/tasks',tasks)

app.get('/',(req,res)=>{
    res.send("hello world")
})

const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server is listening to the port ${port}`)) 
    } catch (error) {
        console.log(error)
    }
}

start()
