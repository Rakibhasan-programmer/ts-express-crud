import express from 'express';
import { ProductControllers } from './Product.controller';
const router = express.Router();


router.post("/", ProductControllers.createProduct);
router.get("/", ProductControllers.getAllProducts);
router.get("/:productID", ProductControllers.getSingleProduct);
router.put("/:productID", ProductControllers.updateSingleProduct);
router.delete("/:productID", ProductControllers.deleteSingleProduct);

export const ProductRoutes = router;