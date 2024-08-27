import { Request,Response,NextFunction } from "express"
import asynchandler from "express-async-handler"
import { subCategories } from "../interfaces/subCategories";
import subCategoriesModel from "../models/subCategoriesModel";
import ApiErrors from "../utils/errors";


//create subcategory
export const createSubCategory = asynchandler(async(req:Request,res:Response,next:NextFunction)=>{
       const subcategory:subCategories = await subCategoriesModel.create(req.body);
       res.status(201).json({data:subcategory});
     }
) 


//get subcategories
export const getSubCategories = asynchandler(async(req:Request,res:Response,next:NextFunction)=>{
       const subcategories = await subCategoriesModel.find({});
       res.status(200).json({data:subcategories});
     }
 )


//get subcategory
export const getSubCategory = asynchandler(async(req:Request,res:Response,next:NextFunction)=>{
   
       const subcategory = await subCategoriesModel.findById(req.params.id);
       if(!subcategory)
          {
             return next(new ApiErrors('Not Found',404));
          }
       res.status(200).json({data:subcategory});
     }
)

//update subcategory
export const updateSubCategory = asynchandler(async(req:Request,res:Response,next:NextFunction)=>{
   
     const subcategory = await subCategoriesModel.findByIdAndUpdate({_id:req.params.id},req.body,{
          new:true,
          runValidators:true
     });
     if(!subcategory)
          {
             return next(new ApiErrors('Not Found',404));
          }
     res.status(200).json({data:subcategory});
   }
)


//delete subcategory
export const deleteSubCategory = asynchandler(async(req:Request,res:Response,next:NextFunction)=>{
   
     const subcategory = await subCategoriesModel.findByIdAndDelete(req.params.id);
     if(!subcategory)
          {
             return next(new ApiErrors('Not Found',404));
          }
     res.status(204).json();
   }
)