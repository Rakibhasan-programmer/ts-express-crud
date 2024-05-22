import { Request } from "express";
import { IOrder } from "./Order.Interface";
import OrderModel from "./Order.model";
import ProductModel from "../product/Product.model";

const createOrderIntoDB = async (orderData: IOrder) => {
  const { quantity, productId } = orderData;

  const foundedProduct = await ProductModel.findById(productId);
  const productQuantity = foundedProduct?.inventory.quantity;

  // checking inventory quantity is less or not
  if (!(productQuantity && productQuantity >= quantity)) {
    throw new Error("Insufficient quantity available in inventory");
  }

  const result = await OrderModel.create(orderData);
  // updating the inventory quantity
  if (result) {
    await ProductModel.findByIdAndUpdate(productId, {
      $set: {
        "inventory.quantity": productQuantity - quantity,
      },
    });
  }

  // if the inventory quantity is 0 then inStock will be falsed
  if (productQuantity - quantity == 0) {
    await ProductModel.findByIdAndUpdate(productId, {
      $set: {
        "inventory.inStock": false,
      },
    });
  }
  return result;
};

const getAllOrdersFromDB = async (req: Request) => {
  const query = req.query;

  if (query?.email) {
    const searchTerm = query.email;
    const result = await OrderModel.find({
      email: { $regex: searchTerm, $options: "i" },
    });

    if (!result.length) return "Data not found";
    else return result;
  }

  const result = await OrderModel.find();
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
};
