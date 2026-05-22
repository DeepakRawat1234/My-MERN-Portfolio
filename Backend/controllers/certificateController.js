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
const UpdateCertificate=async(req,res)=>{
    try{
        const {certificatesData}=req.body;
        const updateData=await Certificate.deleteMany({});
        const insertData=await Certificate.insertMany(certificatesData);
        res.status(200).json({message:"Certificates Updated Successfully"});
    }
    catch(error){
        res.status(500).json({message:`Error updating certificates: ${error.message}`})
    }
}
const deleteCertificate = async (req, res) => {
    try{
        const { _id } = req.body;
        const delelteCertificate=await Certificate.findByIdAndDelete(_id);
        if(!delelteCertificate){
          return res.status(404).json({message:"Certificate not found"});
        }
        res.status(200).json({message:"Certificate deleted successfully"});
    }
    catch(error){
        res.status(500).json({message:`Error deleting certificate: ${error.message}`})
    }
}
export  {Certificates,UpdateCertificate,deleteCertificate};