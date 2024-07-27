import Joi from "joi";

export const createProductSchema = Joi.object({
  name: Joi.string().min(3).max(50).required().messages({
    "any.required": "Should be a required",
  }),
  price: Joi.number().required().messages({
    "any.required": "Should be a required",
  }),
  category: Joi.string().valid("books", "electronics", "clothing", "other"),
  description: Joi.string(),
});

export const updateProductSchema = Joi.object({
  name: Joi.string().min(3).max(50),
  price: Joi.number(),
  category: Joi.string().valid("books", "electronics", "clothing", "other"),
  description: Joi.string(),
});
