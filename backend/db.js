const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ajayj02:McXKlHqV440gqvKv@atlascluster.oqj4aja.mongodb.net/")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}