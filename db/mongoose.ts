import mongoose from "mongoose";

export const dataBase = ()=>{
    mongoose.connect(process.env.DB!).then(()=>{
        console.log(`connected to port ${process.env.DB}`);
    })
    
}

