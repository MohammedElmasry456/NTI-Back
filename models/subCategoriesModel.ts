import {Schema , model} from "mongoose";
import { subCategories } from "../interfaces/subCategories";


const subCategoriesSchema:Schema = new Schema<subCategories>({
    name:{
        type:String,
        trim:true,
        unique:true,
        required:true
    },
    category:{
        type:Schema.Types.ObjectId,
        required:true
    }
},{
    timestamps:true
})

export default model<subCategories>("subCategories",subCategoriesSchema)