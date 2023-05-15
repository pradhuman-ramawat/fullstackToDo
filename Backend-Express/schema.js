//202212020 - Pradhuman Ramawat
const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema(
    {
        id: String,
        text: String,
        day: String,
        reminder: String
    }
,{collection: 'fullstack'});

const Task = mongoose.model('fullstack', taskSchema);

module.exports = Task;