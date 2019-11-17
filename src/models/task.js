const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
})

const TaskModel = mongoose.model('Task', TaskSchema)
module.exports = TaskModel