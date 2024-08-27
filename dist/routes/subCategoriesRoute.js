"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subCategories_1 = require("../controllers/subCategories");
const subCategoriesRouter = (0, express_1.Router)();
subCategoriesRouter.route("/")
    .post(subCategories_1.createSubCategory)
    .get(subCategories_1.getSubCategories);
subCategoriesRouter.route("/:id")
    .get(subCategories_1.getSubCategory)
    .put(subCategories_1.updateSubCategory)
    .delete(subCategories_1.deleteSubCategory);
exports.default = subCategoriesRouter;
