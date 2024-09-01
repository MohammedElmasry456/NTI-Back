import { Request,Response,NextFunction } from "express"
import { subCategories } from "../interfaces/subCategories";
import subCategoriesModel from "../models/subCategoriesModel";
import { FilterData } from "../interfaces/filterData";
import { createOne, deleteOne, getAll, getOne, updateOne } from "./refHandler";


export const filterData = (req: Request, res: Response, next: NextFunction) => {
   let filterData: FilterData = {};
   if (req.params.categoryId) { filterData.category = req.params.categoryId };
   req.filterData = filterData;
   next();
 }
 
 export const setCategoryId = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.category) { req.body.category = req.params.categoryId };
  next();
};


 export const createSubCategory = createOne<subCategories>(subCategoriesModel)
 export const getSubCategories = getAll<subCategories>(subCategoriesModel, 'subcategories')
 export const getSubCategory = getOne<subCategories>(subCategoriesModel)
 export const updateSubCategory = updateOne<subCategories>(subCategoriesModel)
 export const deleteSubCategory = deleteOne<subCategories>(subCategoriesModel)


