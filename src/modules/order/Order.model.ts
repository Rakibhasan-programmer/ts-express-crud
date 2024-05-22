import { Schema, model } from "mongoose";
import { IOrder } from "./Order.Interface";


const OrderSchema = new Schema<IOrder>({
    email: String,
    productId: String,
    price: Number,
    quantity: Number
});

const OrderModel = model('Order', OrderSchema);

export default OrderModel;