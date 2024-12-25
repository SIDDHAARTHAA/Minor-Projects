const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://siddhaartha09:I0tfBN6H5ehEskCI@cluster0.brcd5.mongodb.net/course_selling_app')
.catch((err)=>{
    console.error("mongoDb connection error",err);
})


const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const Todo = mongoose.model('Todo',todoSchema);

module.exports = {
    Todo
}
