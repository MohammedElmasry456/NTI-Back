import {Schema , model} from "mongoose";
import { categories } from "../interfaces/categories";

const categorySchema:Schema = new Schema<categories>({
    name:{
        type:String,
        trim:true,
        unique:true,
        required:true
    }
},{
    timestamps:true
})

export default model<categories>("categories",categorySchema)