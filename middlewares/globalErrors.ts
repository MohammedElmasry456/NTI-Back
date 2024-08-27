import {Request,Response,NextFunction } from "express";
import { customError } from "../interfaces/errorInterface";

const globalErrors = (error:customError,req:Request,res:Response,next:NextFunction)=>{
  error.status = error.status ||"Error";
  error.statusCode = error.statusCode ||500;
  if(process.env.NodeENV == "development")
  {
    res.status(error.statusCode).json({
        error:error,
        message:error.message,
        stack:error.stack
      })
  }else{
    res.status(error.statusCode).json({
        status:error.status,
        message:error.message,
        
      })
  }
 
}

export default globalErrors