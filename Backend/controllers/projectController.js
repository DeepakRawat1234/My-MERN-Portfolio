import express from 'express';
import mongoose from 'mongoose';
import Project from '../models/Project.js';
  const Projects=async(req,res)=>{
try {
  const { category } = req.query;
  const filter = {};

  if (category && category !== "All") {
    filter.category = category;
  }
  const data = await Project.find(filter);

  res.status(200).json({
    success: true,
    data
  });

} catch (error) {
  console.log(error);
  res.status(500).json({
    success: false,
    message: "Server Error"
  });
}
 }
 const ProjectById=async(req,res)=>{
  
  try{
    const {id}=req.params;
    
  const data= await Project.findById(id);
  res.status(200).json({
    message:true,
    data
  })
  }catch(error){
    res.status(500).json(error);
  }
}
export  {Projects,ProjectById};