import { IProduct } from "./Product.interface";
import ProductModel from "./Product.model";

const createProductIntoDB = async (productData: IProduct) => {
    const result = await ProductModel.create(productData);
    return result;
}


export const ProductServices = {
    createProductIntoDB
}