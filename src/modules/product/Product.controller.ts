import { Request, Response } from "express";
import { ProductServices } from "./Product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    // store into DB - services function
    const result = await ProductServices.createProductIntoDB(productData);

    // send response
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Data not inserted.",
      error: error,
    });
  }
};

export const ProductControllers = {
  createProduct,
};
