import { Router } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct, upload } from "../controllers/products";
import { createProductValidator, deleteProductValidator, getProductValidator, updateProductValidator } from "../utils/validation/productsValidator";


const productsRouter:Router = Router();
productsRouter.route("/")
    .post(upload.single("cover"),createProductValidator,createProduct)
    .get(getProducts)
   

    productsRouter.route("/:id")
    .get(getProductValidator,getProduct)
    .put(updateProductValidator,updateProduct)
    .delete(deleteProductValidator,deleteProduct)
export default productsRouter