const express = require('express');
const Task = require('../models/Task');
const Router = express.Router();

Router.get('/tasks', async(req,res) => {
    try{
        const tasks = await Task.find(); 
        res.status(200).send(tasks);
    } catch(e){
        res.status(500).send(e);
    }
})

Router.post('/tasks', async(req,res) => {
    const task = new Task({
        title: req.body.title,
    });
    try{
        await task.save();
        res.status(201).send(task);
    } catch (e){
        res.status(500).send(e);
    }
})

module.exports = Router;