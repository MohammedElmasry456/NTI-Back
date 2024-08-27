import { Document, Schema } from "mongoose";

export interface subCategories extends Document{
    name:string,
    category:Schema.Types.ObjectId
}