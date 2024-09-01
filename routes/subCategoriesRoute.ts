import { Router } from "express";
import { createSubCategory, deleteSubCategory, filterData, getSubCategories, getSubCategory, setCategoryId, updateSubCategory } from "../controllers/subCategories";
import { createSubcategoryValidator, deleteSubcategoryValidator, getSubcategoryValidator, updateSubcategoryValidator } from "../utils/validation/subCategoriesvalidator";
import { allowedTo, checkActive, protectRoutes } from "../controllers/auth";


const subCategoriesRouter:Router = Router({ mergeParams: true });
subCategoriesRouter.route("/")
    .post(protectRoutes,checkActive,allowedTo("manager","admin"),setCategoryId,createSubcategoryValidator,createSubCategory)
    .get(filterData,getSubCategories)
   

    subCategoriesRouter.route("/:id")
    .get(getSubcategoryValidator,getSubCategory)
    .put(protectRoutes,checkActive,allowedTo("manager","admin"),updateSubcategoryValidator,updateSubCategory)
    .delete(protectRoutes,checkActive,allowedTo("manager","admin"),deleteSubcategoryValidator,deleteSubCategory)
export default subCategoriesRouter