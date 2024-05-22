import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./modules/product/Product.route";
const app: Application = express();

// parsers
app.use(cors());
app.use(express.json());

// application route
app.use('/api/products', ProductRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
