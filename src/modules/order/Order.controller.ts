import { Request, Response } from "express";
import { ZodError } from "zod";
import { orderValidationSchema } from "./Order.validation";
import { OrderServices } from "./Order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;

    // zod parsed data
    const zodParsedData = orderValidationSchema.parse(orderData);

    // store into DB - services function
    const result = await OrderServices.createOrderIntoDB(zodParsedData);

    // send response
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
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

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getAllOrdersFromDB(req);

    // send response
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Data not found",
      error: error,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrders,
};
