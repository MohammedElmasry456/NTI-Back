"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categories_1 = require("../controllers/categories");
const CategoriesRouter = (0, express_1.Router)();
CategoriesRouter.route("/")
    .post(categories_1.createCategory)
    .get(categories_1.getCategories);
CategoriesRouter.route("/:id")
    .get(categories_1.getCategory)
    .put(categories_1.updateCategory)
    .delete(categories_1.deleteCategory);
exports.default = CategoriesRouter;
