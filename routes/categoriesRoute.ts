import { Router } from "express";
import { createCategory, getCategories, getCategory, updateCategory,deleteCategory } from "../controllers/categories";
import { createCategoryValidator, deleteCategoryValidator, getCategoryValidator, updateCategoryValidator } from "../utils/validation/categoriesValidator";
import subCategoriesRouter from "./subCategoriesRoute";

const CategoriesRouter:Router = Router();

CategoriesRouter.use('/:categoryId/subcategories', subCategoriesRouter);

CategoriesRouter.route("/")
    .post(createCategoryValidator,createCategory)
    .get(getCategories)
   

CategoriesRouter.route("/:id")
    .get(getCategoryValidator,getCategory)
    .put(updateCategoryValidator,updateCategory)
    .delete(deleteCategoryValidator,deleteCategory)
export default CategoriesRouter