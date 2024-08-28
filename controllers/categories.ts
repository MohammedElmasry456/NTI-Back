import { categories } from "../interfaces/categories"
import categoriesModel from "../models/categoriesModel";
import { createOne, deleteOne, getAll, getOne, updateOne } from "./refHandler";



export const createCategory = createOne<categories>(categoriesModel)
export const getCategories = getAll<categories>(categoriesModel, 'categories')
export const getCategory = getOne<categories>(categoriesModel)
export const updateCategory = updateOne<categories>(categoriesModel)
export const deleteCategory = deleteOne<categories>(categoriesModel)

