import { Request, Response } from "express";
import { ProductServices } from "./Product.service";
import { productValidationSchema } from "./Product.validation";
import { ZodError } from "zod";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    // zod parsed data
    const zodParsedData = productValidationSchema.parse(productData);

    // store into DB - services function
    const result = await ProductServices.createProductIntoDB(zodParsedData);

    // send response
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    const zodError = error instanceof ZodError;
    res.status(500).json({
      success: false,
      message: zodError ? error.issues[0].message : "Data not found",
      error: error,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB(req);

    // send response
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
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

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productID } = req.params;
    
    const result = await ProductServices.getSingleProductFromDB(productID);

    // send response
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
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


const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const { productID } = req.params;

    const result = await ProductServices.updateSingleProductFromDB(productID, productData);

    // send response
    res.status(200).json({
      success: true,
      message: "Products Updated successfully!",
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

const deleteSingleProduct = async (req: Request, res: Response) => {
    try {
      const { productID } = req.params;
  
      const result = await ProductServices.deleteSingleProductFromDB(productID);
  
      // send response
      res.status(200).json({
        success: true,
        message: "Product deleted successfully!",
        data: result.deletedCount == 1 ? null : result,
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
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct
};
