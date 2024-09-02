import express from "express";
import dotenv from "dotenv";
import compression from 'compression';
import mongoSanitize from 'express-mongo-sanitize';
import helmet from 'helmet';
import hpp from 'hpp';
import cors from 'cors';
import { dataBase } from "./db/mongoose";
import Routes from "./routes";
import { Server } from "http";


const app:express.Application = express(); 

dotenv.config();

dataBase();

app.use(express.json({ limit: '10kb' }))
app.use(cors({
  origin: ['http://localhost:4200', 'https://dramcode.top'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(compression());
app.use(mongoSanitize());
app.use(hpp({ whitelist: ['price', 'category', 'subcategory', 'ratingAverage', 'sold'] }));
app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }))
app.use(express.static("uploads"));
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
