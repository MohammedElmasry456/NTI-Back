import { Router } from "express";
import { createCategory, getCategories, getCategory, updateCategory,deleteCategory } from "../controllers/categories";
import { createCategoryValidator, deleteCategoryValidator, getCategoryValidator, updateCategoryValidator } from "../utils/validation/categoriesValidator";
import subCategoriesRouter from "./subCategoriesRoute";
import { allowedTo, checkActive, protectRoutes } from "../controllers/auth";

const CategoriesRouter:Router = Router();

CategoriesRouter.use('/:categoryId/subcategories', subCategoriesRouter);

CategoriesRouter.route("/")
    .post(protectRoutes,checkActive,allowedTo("manager","admin"),createCategoryValidator,createCategory)
    .get(getCategories)
   

CategoriesRouter.route("/:id")
    .get(getCategoryValidator,getCategory)
    .put(protectRoutes,checkActive,allowedTo("manager","admin"),updateCategoryValidator,updateCategory)
    .delete(protectRoutes,checkActive,allowedTo("manager","admin"),deleteCategoryValidator,deleteCategory)
export default CategoriesRouter