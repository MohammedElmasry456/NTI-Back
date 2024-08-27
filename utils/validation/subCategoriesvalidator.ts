import { RequestHandler } from "express";
import { check } from "express-validator";
import val_Middleware from "../../middlewares/validator";

export const createSubcategoryValidator: RequestHandler[] = [
    check('name')
      .notEmpty().withMessage('Subcategory Name is Required')
      .isLength({ min: 2, max: 50 }).withMessage('Name length must be between 2 and 50'),
    check('category')
      .notEmpty().withMessage('Category is Required')
      .isMongoId().withMessage('Invalid Mongo Id'),
      val_Middleware
  ]

  export const updateSubcategoryValidator: RequestHandler[] = [
    check('name').optional()
      .isLength({ min: 2, max: 50 }).withMessage('Name length must be between 2 and 50'),
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