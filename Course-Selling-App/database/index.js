const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://siddhaartha09:I0tfBN6H5ehEskCI@cluster0.brcd5.mongodb.net/course_selling_app')
    .catch(err => console.error("MongoDB connection error:", err));

const AdminSchema = new mongoose.Schema({
    //schema defination here
    username:String,
    password:String
})

const UserSchema = new mongoose.Schema({
    //schema
    username:String,
    password:String,
    purchasedCourse: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
})

const CourseSchema = new mongoose.Schema({
    //schema
    title: String,
    description: String,
    imagelink:String,
    price: Number
})

const Admin = mongoose.model('Admin',AdminSchema)
const User = mongoose.model('User',UserSchema);
const Course = mongoose.model('Course',CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}