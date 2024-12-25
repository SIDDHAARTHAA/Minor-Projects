const express = require('express');
const app = express();
const {createTodo, updateTodo} = require('./types');
const {Todo} = require('./database/db');

app.use(express.json());

app.post('/todo',async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.parse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: 'invalid input'
        })
        return;
    }
    await Todo.create({
        title: parsedPayload.data.title,
        description: parsedPayload.data.description,
        completed: false
    })
    res.json({
        msg: 'todo created successfully'
    })
})

app.get('/todo',async (req,res)=>{
    const todos = await Todo.find({});
    res.json(todos);  
})

app.put("/complete",async (req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.parse(updatePayload);
    if(!parsedPayload.success   ){
        res.status(411).json({
            msg: 'invalid input'
        })
        return;
    }
    await Todo.updateOne    ({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: 'todo updated successfully'
    })
})