// This file serves to collect all of the API routes and packages them up. Also remember confusion as to the lack of the word tag in tag-routes.js? In this file we prefix those routes with /tag etc..
const router = require("express").Router();
const categoryRoutes = require("./category-routes");
const productRoutes = require("./product-routes");
const tagRoutes = require("./tag-routes");

router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/tags", tagRoutes);

module.exports = router;
