import express from "express";
import dotenv from "dotenv";
import { dataBase } from "./db/mongoose";
import Routes from "./routes";
import { Server } from "http";


const app:express.Application = express(); 

dotenv.config();

dataBase();

app.use(express.json());
Routes(app);

const server:Server= app.listen(process.env.PORT,()=>{
    console.log("All Done")
})

process.on("unhandledRejection",(error:Error)=>{
    console.error(`unhandledRejection ${error.name} | ${error.message}`);
    server.close(()=>{
        console.error("shutting the application down");
        process.exit(1);
    })
})
