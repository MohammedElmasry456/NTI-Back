import { Router } from "express";
import { createSubCategory, deleteSubCategory, getSubCategories, getSubCategory, updateSubCategory } from "../controllers/subCategories";
import { createSubcategoryValidator, deleteSubcategoryValidator, getSubcategoryValidator, updateSubcategoryValidator } from "../utils/validation/subCategoriesvalidator";


const subCategoriesRouter:Router = Router();
subCategoriesRouter.route("/")
    .post(createSubcategoryValidator,createSubCategory)
    .get(getSubCategories)
   

    subCategoriesRouter.route("/:id")
    .get(getSubcategoryValidator,getSubCategory)
    .put(updateSubcategoryValidator,updateSubCategory)
    .delete(deleteSubcategoryValidator,deleteSubCategory)
export default subCategoriesRouter