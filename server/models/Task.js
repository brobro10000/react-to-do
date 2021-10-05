const {Schema, model} = require('mongoose')

const taskSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        importance: {
            type: String,
            required: true
        }
    }
)

const Task = model('Task', taskSchema);

module.exports = Task