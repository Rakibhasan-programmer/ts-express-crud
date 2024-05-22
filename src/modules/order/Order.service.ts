import { Request } from "express";
import { IOrder } from "./Order.Interface";
import OrderModel from "./Order.model";

const createOrderIntoDB = async (orderData: IOrder) => {
  const result = await OrderModel.create(orderData);
  return result;
};

const getAllOrdersFromDB = async (req: Request) => {
    const query = req.query;
  
    if (query?.email) {
      const searchTerm = query.email;
      const result = await OrderModel.find({
        email: { $regex: searchTerm, $options: "i" },
      });
      
      if(!result.length) return "Data not found";
      else return result;
    }
  
    const result = await OrderModel.find();
    return result;
  };

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB
};
