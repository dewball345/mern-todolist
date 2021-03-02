const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoitemSchema = new Schema({
    username: {type: String, required:true},
    title: {type: String, required: true, minLength:2},
    description: {type: String, required: true, minLength:2},
    date: {type: Date, required: true}
}, {timestamps: true})

const TodoItem = mongoose.model('TodoItem', todoitemSchema);
module.exports = TodoItem;