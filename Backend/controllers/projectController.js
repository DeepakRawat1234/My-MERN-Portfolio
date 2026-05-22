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
const UpdateProject=async(req,res)=>{
try{
  const {projectsData}=req.body;
const updateData=await Project.deleteMany({});
const insertData=await Project.insertMany(projectsData);
res.status(200).json({message:"Projects Updated Successfully"});
}
catch(error){
  res.status(500).json({message:`Error updating projects: ${error.message}`})
}
}
const deleteProject = async (req, res) => {
  try{
    const { _id } = req.body;
    const delelteProject=await Project.findByIdAndDelete(_id);
    if(!delelteProject){
      return res.status(404).json({message:"Project not found"});
    }
    res.status(200).json({message:"Project deleted successfully"});
  }
  catch(error){
    res.status(500).json({message:`Error deleting project: ${error.message}`})
  }
}
export  {Projects,ProjectById,UpdateProject,deleteProject};