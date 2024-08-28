import { Router } from "express";
import { createSubCategory, deleteSubCategory, filterData, getSubCategories, getSubCategory, updateSubCategory } from "../controllers/subCategories";
import { createSubcategoryValidator, deleteSubcategoryValidator, getSubcategoryValidator, updateSubcategoryValidator } from "../utils/validation/subCategoriesvalidator";


const subCategoriesRouter:Router = Router({ mergeParams: true });
subCategoriesRouter.route("/")
    .post(createSubcategoryValidator,createSubCategory)
    .get(filterData,getSubCategories)
   

    subCategoriesRouter.route("/:id")
    .get(getSubcategoryValidator,getSubCategory)
    .put(updateSubcategoryValidator,updateSubCategory)
    .delete(deleteSubcategoryValidator,deleteSubCategory)
export default subCategoriesRouter