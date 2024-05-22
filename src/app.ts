import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./modules/product/Product.route";
import orderRoutes from "./modules/order/Order.route";
const app: Application = express();

// parsers
app.use(cors());
app.use(express.json());

// application route
app.use("/api/products", ProductRoutes);
app.use("/api/orders", orderRoutes);

// root
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
  next();
});

export default app;
