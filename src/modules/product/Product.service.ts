import { Request } from "express";
import { IProduct } from "./Product.interface";
import ProductModel from "./Product.model";

const createProductIntoDB = async (productData: IProduct) => {
  const result = await ProductModel.create(productData);
  return result;
};

const getAllProductsFromDB = async (req: Request) => {
  const query = req.query;

  if (query?.searchTerm) {
    const searchTerm = query.searchTerm;
    const result = await ProductModel.find({
      $or: [
        { name: { $regex: searchTerm, $options: "i" } },
        { tags: { $regex: searchTerm, $options: "i" } },
      ],
    });
    return result;
  }

  const result = await ProductModel.find();
  return result;
};

const getSingleProductFromDB = async (productID: string) => {
  const result = await ProductModel.findOne({ _id: productID });
  return result;
};

const updateSingleProductFromDB = async (
  productID: string,
  productData: IProduct
) => {
  const result = await ProductModel.findByIdAndUpdate(
    { _id: productID },
    {
      $set: productData,
    },
    { new: true }
  );

  return result;
};

const deleteSingleProductFromDB = async (productID: string) => {
  const result = await ProductModel.deleteOne({ _id: productID });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateSingleProductFromDB,
  deleteSingleProductFromDB,
};
