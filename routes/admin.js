const { Router, jwtSecret, jwt } = require("../config");
const adminMiddleware = require("../middleware/admin");
const {Admin,Course} = require('../database');
// const Router = Router();
//admin signup
Router.post('/signup',(req,res)=>{
    const {username,password} = req.body;
    Admin.create({username,password})
    res.json({
        message: "Admin created successfully"
    })
})

//admin create course
Router.post('/courses',adminMiddleware,async(req,res)=>{
    const {title,description,price,imagelink} = req.body;

    const newCourse = await Course.create({title,description,price,imagelink});
    res.json({message: "course created successfully", course: newCourse});

})

//admin get all courses
Router.get('/courses',adminMiddleware,async(req,res)=>{
    const response = await Course.find({});
    res.json({message: "courses fetched successfully", courses: response});
})

//admin signin
Router.post('/signin',async(req,res)=>{
    const {username,password} = req.body;
    try{
        const user = await Admin.findOne({username,password});
        if(user){
            const token = jwt.sign({username},jwtSecret,{expiresIn:'1h'});
            res.json({message: "Admin signed in successfully", token});
        }else{
            res.status(403).json({message: 'Invalid credentials'});
        }
    }
    catch(error){
        console.error("Error during sign-in:",error);
        res.status(500).json({message: "Internal server error"});
    }
})

module.exports = Router;