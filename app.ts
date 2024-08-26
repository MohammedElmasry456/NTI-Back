import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app:express.Application = express(); 

dotenv.config();

mongoose.connect(process.env.DB!).then(()=>{
    console.log(`connected to port ${process.env.DB}`);
}).catch((e:Error)=>console.log(e))

app.use(express.json());
app.get("/",(req:express.Request,res:express.Response)=>{
    res.json({message:"hello world"});
})

app.listen(process.env.PORT)