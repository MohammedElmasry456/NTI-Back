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
        required:true,
        ref: 'categories'
    }
},{
    timestamps:true
})

subCategoriesSchema.pre<subCategories>(/^find/, function (next) {
    this.populate({ path: 'category', select: 'name' })
    next()
  })

export default model<subCategories>("subCategories",subCategoriesSchema)