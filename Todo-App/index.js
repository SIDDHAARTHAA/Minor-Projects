const express = require('express');
const app = express();
const {createTodo, updateTodo} = require('./types');

app.use(express.json());

app.post('/todo',(req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.parse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: 'invalid input'
        })
        return;
    }
})

app.get('/todo',(req,res)=>{

})

app.put("/complete",(req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.parse(updatePayload);
    if(!parsedPayload.success   ){
        res.status(411).json({
            msg: 'invalid input'
        })
        return;
    }
})