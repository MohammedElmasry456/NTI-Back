import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler';
import { FilterData } from '../interfaces/filterData';
import ApiErrors from '../utils/errors';
import Features from '../utils/features';


//get subcategories
export const getAll = <modelType>(model: mongoose.Model<any>, modelName: string) => asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    let filterData: FilterData = {};
    let searchLength: number = 0;
    if (req.filterData) {
      filterData = req.filterData
    }
    if (req.query) {
      const searchResult: Features = new Features(model.find(filterData), req.query).filter().search(modelName)
      const searchData: modelType[] = await searchResult.mongooseQuery;
      searchLength = searchData.length;
    }
  
    const countDocuments: number = searchLength || await model.find(filterData).countDocuments()
    const apiFeatures: Features = new Features(model.find(filterData), req.query).filter().sort().limitFields().search(modelName).pagination(countDocuments);
    const { mongooseQuery, paginationResult } = apiFeatures;
    const documents: modelType[] = await mongooseQuery;
  
    res.status(200).json({ length: documents.length, pagination: paginationResult, data: documents })
  })
//////////////////////////////////////////////////////////////////////////////////////////////////

//get subcategory
  export const getOne = <modelType>(model: mongoose.Model<any>) => asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const document = await model.findById(req.params.id);
    if (!document) {
      return next(new ApiErrors('Document not found', 404))
    }
    res.status(200).json({ data: document });
  })
//////////////////////////////////////////////////////////////////////////////////////////////////

//create subcategory
  export const createOne = <modelType>(model: mongoose.Model<any>) => asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const document: modelType = await model.create(req.body);
    res.status(201).json({ data: document });
  })

  //////////////////////////////////////////////////////////////////////////////////////////////////

//update subcategory
  export const updateOne = <modelType>(model: mongoose.Model<any>) => asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const document = await model.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!document) {
      return next(new ApiErrors('Document not found', 404))
    }
    res.status(200).json({ data: document });
  })
//////////////////////////////////////////////////////////////////////////////////////////////////

//delete subcategory
  export const deleteOne = <modelType>(model: mongoose.Model<any>) => asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const document = await model.findByIdAndDelete(req.params.id);
    if (!document) {
      return next(new ApiErrors('Document not found', 404))
    }
    res.status(204).json({ data: document });
  })