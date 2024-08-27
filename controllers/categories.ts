import { Request,Response,NextFunction } from "express"
import { categories } from "../interfaces/categories"
import categoriesModel from "../models/categoriesModel";
import asynchandler from "express-async-handler"
import ApiErrors from "../utils/errors";


//create category
export const createCategory = asynchandler(async(req:Request,res:Response,next:NextFunction)=>{
       const category:categories = await categoriesModel.create(req.body);
       res.status(201).json({data:category});
     }
) 


//get categories
export const getCategories = asynchandler(async(req:Request,res:Response,next:NextFunction)=>{
       const categories = await categoriesModel.find({});
       res.status(200).json({data:categories});
     }
 )


//get category
export const getCategory = asynchandler(async(req:Request,res:Response,next:NextFunction)=>{
   
       const category = await categoriesModel.findById(req.params.id);
       if(!category)
          {
             return next(new ApiErrors('Not Found',404));
          }
       res.status(200).json({data:category});
     }
)

//update category
export const updateCategory = asynchandler(async(req:Request,res:Response,next:NextFunction)=>{
   
     const category = await categoriesModel.findByIdAndUpdate({_id:req.params.id},req.body,{
          new:true,
          runValidators:true
     });
     if(!category)
          {
             return next(new ApiErrors('Not Found',404));
          }
     res.status(200).json({data:category});
   }
)


//delete category
export const deleteCategory = asynchandler(async(req:Request,res:Response,next:NextFunction)=>{
   
     const category = await categoriesModel.findByIdAndDelete(req.params.id);
     if(!category)
          {
             return next(new ApiErrors('Not Found',404));
          }
     res.status(204).json();
   }
)