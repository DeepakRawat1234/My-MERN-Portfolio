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