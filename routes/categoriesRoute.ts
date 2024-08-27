import { Router } from "express";
import { createCategory, getCategories, getCategory, updateCategory,deleteCategory } from "../controllers/categories";
import { createCategoryValidator, getCategoryValidator, updateCategoryValidator } from "../utils/validation/categoriesValidator";

const CategoriesRouter:Router = Router();
CategoriesRouter.route("/")
    .post(createCategoryValidator,createCategory)
    .get(getCategories)
   

CategoriesRouter.route("/:id")
    .get(getCategoryValidator,getCategory)
    .put(updateCategoryValidator,updateCategory)
    .delete(deleteCategory)
export default CategoriesRouter