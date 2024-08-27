import { Application,Request,Response,NextFunction } from "express";
import CategoriesRouter from "./categoriesRoute";
import subCategoriesRouter from "./subCategoriesRoute";
import ApiErrors from "../utils/errors";
import globalErrors from "../middlewares/globalErrors";

const Routes = (app:Application):void =>{
    app.use('/api/v1/categories',CategoriesRouter);
    app.use('/api/v1/subCategories',subCategoriesRouter); 
    app.all("*",(req:Request, res:Response, next:NextFunction)=>{
      next(new ApiErrors(`The Route ${req.originalUrl} Not Found`,400))
    })

    app.use(globalErrors)
}



export default Routes