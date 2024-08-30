import * as all from "../interfaces"
import { Application,Request,Response,NextFunction } from "express";
import CategoriesRouter from "./categoriesRoute";
import subCategoriesRouter from "./subCategoriesRoute";
import ApiErrors from "../utils/errors";
import globalErrors from "../middlewares/globalErrors";
import productsRoute from "./productsRoute";
import usersRoute from "./usersRoute";
import authRoute from "./authRoute";

const Routes = (app:Application):void =>{
    app.use('/api/v1/categories',CategoriesRouter);
    app.use('/api/v1/subCategories',subCategoriesRouter); 
    app.use('/api/v1/products',productsRoute); 
    app.use('/api/v1/users',usersRoute); 
    app.use('/api/v1/auth',authRoute); 
    app.all("*",(req:Request, res:Response, next:NextFunction)=>{
      next(new ApiErrors(`The Route ${req.originalUrl} Not Found`,400))
    })

    app.use(globalErrors)
}



export default Routes