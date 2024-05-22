import { Schema, model } from "mongoose";
import { IProduct, IVariant } from "./Product.interface";


const VariantsSchema = new Schema<IVariant>({
    type: String,
    value: String
})

const ProductSchema = new Schema<IProduct>({
  name: String,
  description: String,
  price: Number,
  category: String,
  tags: [String],
  variants: [VariantsSchema],
  inventory: {
    quantity: Number,
    inStock: Boolean,
  },
});

const ProductModel = model<IProduct>('Product', ProductSchema);

export default ProductModel;
