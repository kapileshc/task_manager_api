const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{type:String,required:[true,'name is required'],trim:true,maxlength:[15,'name cannot be more than 15 letter']},
    completed:{type:Boolean,default:false,}
})

module.exports = mongoose.model('Task',TaskSchema)