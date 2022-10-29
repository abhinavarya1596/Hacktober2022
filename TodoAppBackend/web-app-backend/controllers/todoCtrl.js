const Todo=require('../models/todoModel')
const express=require('express');
const mongoose =require('mongoose') ;
const catchAsyncError=require('../errorHandling/catchAsyncError');
const errorHandler = require('../errorHandling/customErrorHandler');
const paginationFeature=require('../utils/paginationFeature')


const list=catchAsyncError(  async function(req ,res,){
    const {page}=req.query;
    paginationFeature({limit:6,page},Todo,res)
})

const create=catchAsyncError( async function(req ,res){
    const {body,tagline}=req.body;
    const todo=new Todo({
        body,
        tagline
    })
   await todo.save()
    res.status(201).json({
        success:true,
        data:todo
    })

})
const read=catchAsyncError( function(req ,res){
   
    res.status(200).json({
        success: true,
        message: '',
        data: req.todo
    })
})
const remove= catchAsyncError( async function(req ,res){
    const todo=await Todo.findByIdAndDelete(req.todo._id)
    res.status(200).json({
        success:true,
        message:'deleted successfully'
    })

})


const update=catchAsyncError( async function(req ,res){
    const {body,tagline}=req.body;
    const {_id}=req.todo
    const todo=await Todo.findByIdAndUpdate(_id,{  
        body,
        tagline
    },{new:true,runValidators:true})


    res.status(200).json({
         success:true,
        message:'updated successfully',
        data:todo
    })

})

const todoById=catchAsyncError( async function(req ,res,next){
    const { todoId } = req.params
    const todo = await Todo.findById(todoId)
    if(!todo){
        return next(new errorHandler('todo not found',404))
    }
    req.todo=todo;
    next()

})
 

module.exports={list,read,update,create,remove,todoById}
