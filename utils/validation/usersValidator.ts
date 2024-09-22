import { RequestHandler } from "express";
import { check } from "express-validator";
import validatorMiddleware from "../../middlewares/validator";
import usersModel from "../../models/usersModel";
import bcrypt from 'bcryptjs';


//create User Validator
export const createUserValidator: RequestHandler[] = [
  check('name')
    .notEmpty().withMessage('User Name is Required')
    .isLength({ min: 2, max: 50 }).withMessage('Name length must be between 2 and 50'),
  check('email')
    .notEmpty().withMessage('Email is Required')
    .isEmail().withMessage('Invalid Email')
    .custom(async (val: string) => {
      const user = await usersModel.findOne({ email: val });
      if (user) { throw new Error(`email is already exist`) }
      return true;
    }),
  check('password')
    .notEmpty().withMessage('password required')
    .isLength({ min: 6, max: 20 }).withMessage('password length must between 6 and 20 char')
    .custom((val: string, { req }) => {
      if (val !== req.body.confirmPassword) { throw new Error("passwords doesn't match") }
      return true
    }),
  check('confirmPassword')
    .notEmpty().withMessage('confirm password required')
    .isLength({ min: 6, max: 20 }).withMessage('confirm password length must between 6 and 20 char'),
  validatorMiddleware
]

//update User Validator
export const updateUserValidator: RequestHandler[] = [
  check('id').isMongoId().withMessage('Invalid Mongo Id'),
  check('name').optional()
    .isLength({ min: 2, max: 50 }).withMessage('Name length must be between 2 and 50'),
  check('active').optional()
    .isBoolean().withMessage('Invalid Active value'),
  validatorMiddleware
]

//get User Validator
export const getUserValidator: RequestHandler[] = [
  check('id').isMongoId().withMessage('Invalid Mongo Id'),
  validatorMiddleware
]

//delete User Validator
export const deleteUserValidator: RequestHandler[] = [
  check('id').isMongoId().withMessage('Invalid Mongo Id'),
  validatorMiddleware
]


// change UserPassword Validator
export const changeUserPasswordValidator: RequestHandler[] = [
  check('password')
    .notEmpty().withMessage('password required')
    .isLength({ min: 6, max: 20 }).withMessage('password length must between 6 and 20 char')
    .custom((val: string, { req }) => {
      if (val !== req.body.confirmPassword) { throw new Error("passwords doesn't match") }
      return true
    }),
  check('confirmPassword')
    .notEmpty().withMessage('confirm password required')
    .isLength({ min: 6, max: 20 }).withMessage('confirm password length must between 6 and 20 char'),
  validatorMiddleware
]

// update LoggedUser Validator
export const updateLoggedUserValidator: RequestHandler[] = [
  check('name').optional()
    .isLength({ min: 2, max: 50 }).withMessage('Name length must be between 2 and 50'),
  validatorMiddleware
]

// change LoggedUser Password Validator
export const changeLoggedUserPasswordValidator: RequestHandler[] = [
  check('currentPassword')
    .notEmpty().withMessage('current password required')
    .isLength({ min: 6, max: 20 }).withMessage('current password length must between 6 and 20 char')
    .custom(async (val: string, { req }) => {
      const user = await usersModel.findById(req.user._id);
      const isCorrectPassword: boolean = await bcrypt.compare(val, user!.password)
      if (!isCorrectPassword) { throw new Error('current password invalid') }
    }),
  check('password')
    .notEmpty().withMessage('password required')
    .isLength({ min: 6, max: 20 }).withMessage('password length must between 6 and 20 char')
    .custom(async (val: string, { req }) => {
      if (val !== req.body.confirmPassword) { throw new Error("passwords doesn't match") }
      return true
    }),
  check('confirmPassword')
    .notEmpty().withMessage('confirm password required')
    .isLength({ min: 6, max: 20 }).withMessage('confirm password length must between 6 and 20 char'),
  validatorMiddleware
]