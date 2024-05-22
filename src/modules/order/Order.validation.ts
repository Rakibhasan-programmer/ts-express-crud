import { z } from "zod";

export const orderValidationSchema = z.object({
  email: z.string().email({ message: "Must be a valid email" }),
  productId: z.string(),
  price: z.number().positive({ message: "Price must be greater than 0" }),
  quantity: z.number().positive({ message: "Quantity must be greater than 0" }),
});
