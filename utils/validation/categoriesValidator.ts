import { RequestHandler } from "express";
import { check } from "express-validator";
import val_Middleware from "../../middlewares/validator";
import subCategoriesModel from "../../models/subCategoriesModel";
import { subCategories } from "../../interfaces/subCategories";
import categoriesModel from "../../models/categoriesModel";


export const createCategoryValidator: RequestHandler[] = [
    check('name')
      .notEmpty().withMessage('Category Name is Required')
      .isLength({ min: 2, max: 50 }).withMessage('Name length must be between 2 and 50')
      .custom(async (val: string) => {
        const category = await categoriesModel.findOne({ name: val });
        if (category) { throw new Error('category is already exist') };
        return true;
      }),
    val_Middleware
  ]
  
  export const updateCategoryValidator: RequestHandler[] = [
    check('name')
      .notEmpty().withMessage('Category Name is Required')
      .isLength({ min: 2, max: 50 }).withMessage('Name length must be between 2 and 50'),
    val_Middleware
  ]
  
  export const getCategoryValidator: RequestHandler[] = [
    check('id').isMongoId().withMessage((val, { req }) => req.__('check_id')),
    val_Middleware
  ]
  
  export const deleteCategoryValidator: RequestHandler[] = [
    check('id').isMongoId().withMessage('Invalid Mongo Id')
      .custom(async (val) => {
        const subcategories = await subCategoriesModel.find({ category: val });
        if (subcategories.length > 0) {
          const bulkOption = subcategories.map((subcategory: subCategories) => ({
            deleteOne: { filter: { _id: subcategory._id } }
          }))
          await subCategoriesModel.bulkWrite(bulkOption)
        }
        return true;
      }),
      val_Middleware
  ]