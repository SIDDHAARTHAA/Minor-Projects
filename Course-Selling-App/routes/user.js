const { Router, jwt, jwtSecret } = require('../config');
const { User, Course } = require('../database');
// const Router = Router();

const userMiddleware = require('../middleware/user');

//user signup
Router.post('/signup', (req, res) => {
    const { username, password } = req.body;
    User.create({ username, password })
    res.json({ message: "User created successfully" });
})

//user signin
Router.post("/signin", async (req, res) => {
    const {username,password} = req.body;
    
    try{
        const user = await User.findOne({username,password});
        if(user){
            const token = jwt.sign({username},jwtSecret,{expiresIn:'1h'});
            res.json({message:"User signed in successfully",token});
        }else{
            res.status(401).json({message:"Invalid credentials"});
        }
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
})

//user get all courses
Router.get('/courses', userMiddleware, async (req, res) => {
    const courses = await Course.find({});
    res.json({ courses: courses })
})

//user buy course
Router.post('/buy/:courseId',userMiddleware,async(req,res)=>{
    const {courseId} = req.params.courseId;
    const username = req.headers.username;

    const result = await User.updateOne({username},{$push:{purchasedCourses:courseId}});
    res.json({message: "Course purchased successfully", result});
})

//user get purchased courses
Router.get('/purchased',userMiddleware,async(req,res)=>{
    const user = await User.findOne({
        username: req.headers.username
    })
    const courses = await Course.find({
        _id:{
            $in: user.purchasedCourses
        }
    })
    res.json({courses:courses});
})

module.exports = Router;