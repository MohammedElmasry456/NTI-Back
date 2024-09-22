import { RequestHandler } from "express";
import { check } from "express-validator";
import val_Middleware from "../../middlewares/validator";
import categoriesModel from "../../models/categoriesModel";
import subCategoriesModel from "../../models/subCategoriesModel";

export const createSubcategoryValidator: RequestHandler[] = [
  check('name')
    .notEmpty().withMessage('Subcategory Name is Required')
    .isLength({ min: 2, max: 50 }).withMessage('Name length must be between 2 and 50')
    .custom(async (val: string) => {
      const subcategory = await subCategoriesModel.findOne({ name: val });
      if (subcategory) { throw new Error('subcategory is already exist') };
      return true;
    }),
  check('category')
    .notEmpty().withMessage('Category is Required')
    .isMongoId().withMessage('Invalid Mongo Id')
    .custom(async (val) => {
      const category = await categoriesModel.findById(val);
      if (!category) {
        throw new Error('Category Not Found');
      }
      return true;
    }),
    val_Middleware
]

  export const updateSubcategoryValidator: RequestHandler[] = [
    check('name').optional()
      .isLength({ min: 2, max: 50 }).withMessage('Name length must be between 2 and 50')
      .custom(async (val: string) => {
        const subcategory = await subCategoriesModel.findOne({ name: val });
        if (subcategory) { throw new Error('subcategory is already exist') };
        return true;
      }),
    check('category').optional()
      .isMongoId().withMessage('Invalid Mongo Id'),
    val_Middleware
  ]
  
  export const getSubcategoryValidator: RequestHandler[] = [
    check('id').isMongoId().withMessage('Invalid Mongo Id'),
    val_Middleware
  ]
  
  export const deleteSubcategoryValidator: RequestHandler[] = [
    check('id').isMongoId().withMessage('Invalid Mongo Id'),
    val_Middleware
  ]