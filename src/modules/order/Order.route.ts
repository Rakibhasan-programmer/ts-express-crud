import express from "express";
import { OrderControllers } from "./Order.controller";

const orderRoutes = express.Router();

orderRoutes.post("/", OrderControllers.createOrder);
orderRoutes.get("/", OrderControllers.getAllOrders);


export default orderRoutes;