import express from 'express';
import mongoose from 'mongoose';
import Certificate from '../models/Certificate.js';
const Certificates=async(req,res)=>{
try{
    const data=await Certificate.find();
    res.status(200).json({
        success:true,
        data
    });
}
catch(error){
    res.status(500).json(error)
}
}
export default Certificates;