import { Document, Schema } from "mongoose";
import { categories } from "./categories";

export interface subCategories extends Document{
    name:string,
    category:categories
}