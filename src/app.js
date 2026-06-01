const express=require("express");
const morgan=require("morgan")
const cors=require("cors")

const productRoutes=require("./routes/productRoutes");

const app=express()

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/products",productRoutes)

module.exports=app;