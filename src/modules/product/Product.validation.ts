import { z } from "zod";

const variantSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const inventorySchema = z.object({
  quantity: z.number().positive({ message: "Price must be greater than 0" }),
  inStock: z.boolean(),
});

export const productValidationSchema = z.object({
  name: z
    .string()
    .max(50, { message: "Title must be less than 50 characters" }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" })
    .max(1000, { message: "Description must be less than 1000 characters" }),
  price: z.number().positive({ message: "Price must be greater than 0" }),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(variantSchema),
  inventory: inventorySchema,
});
