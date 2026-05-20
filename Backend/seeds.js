import mongoose from "mongoose";

import connectDB from "./config/db.js";


// MODELS

import Project from "./models/Project.js";
import Certificate from "./models/Certificate.js";
import Skill from "./models/Skills.js";
import User from "./models/User.js";


// DATA

import {
   Projects,
   Certificates,
   Skills,
   UserData,
} from "./data/seedData.js";
console.log(Projects);


const importData = async () => {

   try {

      await connectDB();

      // DELETE OLD DATA

      await Project.deleteMany();

      await Certificate.deleteMany();

      await Skill.deleteMany();

      await User.deleteMany();


      // INSERT DATA

      await Project.insertMany(Projects);

      await Certificate.insertMany(Certificates);

      await Skill.insertMany(Skills);

      await User.insertMany(UserData);


      console.log("Data Imported Successfully");

      mongoose.connection.close();

   } catch (error) {

      console.error("Data Import Failed", error);

      process.exit(1);
   }
};

importData();