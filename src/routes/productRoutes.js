const express=require("express");
const router=require.Router()

const {createProduct,getProducts,getProductById,updateProduct,deleteProduct}=require("../controllers/productController");

router.post("/",createProduct);
router.get("/",getProducts);
router.get("/:id",getProductById);
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct);

module.exports=router;