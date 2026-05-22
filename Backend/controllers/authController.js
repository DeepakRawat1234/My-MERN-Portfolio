import express from 'express';
import mongoose from 'mongoose';
import User from '../models/User.js';
import Skill from "../models/Skills.js";
export const MyData=async(req,res)=>{
    try{
const data=await User.findOne();
res.status(200).json(data);
    }catch(error){
        res.status(500).json({message:`Error fetching data: ${error.message}`});
    }
}

export const Skills=async(req,res)=>{
    try{
        const data=await Skill.find();
        res.status(200).json(data);
    }catch(error){
        res.status(500).json({message:`Error fetchin skill: ${error.message}`})
    }

}

export const updateProfile=async(req,res)=>{
    try{
        
        const updateData= await User.findOneAndUpdate({},{
            $set: req.body
        },{new:true});
        res.status(200).json({message:"Profile updated successfully"})
    }
    catch(error){
        res.status(500).json({message:`Error updating profile: ${error.message}`})
    }
}
export const updateEducation=async(req,res)=>{
    try{
        
        const updateData= await User.findOneAndUpdate({},{
education:req.body
        },{new:true});
        res.status(200).json({message:"Item updated successfully"})
    }
    catch(error){
        res.status(500).json({message:`Error updating profile: ${error.message}`})
    }
}
export const deleteEducation = async (req, res) => {
  try {
    const { _id } = req.body;
    console.log("Deleting education _id:", _id);

    const updatedUser = await User.findOneAndUpdate(
      {}, // ✅ Sirf ek user hai toh yeh bilkul sahi hai
      {
        $pull: {
          education: { _id: new mongoose.Types.ObjectId(_id) }
        }
      },
      { returnDocument: 'after' }
    );

    console.log("Updated education:", updatedUser.education); // ← yeh dekh

    res.status(200).json({
      message: "Item deleted successfully",
      data: updatedUser
    });

  } catch (error) {
    res.status(500).json({
      message: `Error in deleting item: ${error.message}`
    });
  }
};
export const addSkills=async(req,res)=>{
    try{
        const existingSkills=await Skill.deleteMany();
        const updateData= await Skill.insertMany(req.body);
        res.status(200).json({message:"Skills updated successfully"})
    }
    catch(error){
                res.status(500).json({message:`Skill not updated : ${error.message}`})
    }
}
export const deleteSkills=async(req,res)=>{
    const { _id } = req.body;
    try{
        const deletedSkill = await Skill.findByIdAndDelete(_id);
        if (!deletedSkill) {
            return res.status(404).json({ message: "Skill not found" });
        }
        res.status(200).json({ message: "Skill deleted successfully" });
    }
    catch(error){
        res.status(500).json({ message: `Error deleting skill: ${error.message}` });
    }
}