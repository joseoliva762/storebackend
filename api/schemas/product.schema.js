const Joi = require('joi');

const id = Joi
  .string()
  .uuid();
const name = Joi
  .string()
  .min(3)
  .max(30)
  .pattern(/^[a-zA-Z0-9 \-_]*$/);
const price  = Joi
  .number()
  .integer()
  .min(10);
const currency = Joi
  .string()
  .min(3)
  .max(10);

// description recive un string que acetpta  guines signos de interrogacion y exclamación
const description = Joi
  .string()
  .min(3)
  .max(100)
  .pattern(/^[a-zA-ZÀ-ÿñÑ 0-9,.?!¿¡_@-]+$/);
const image = Joi
  .string()
  .uri();
const owner = Joi.string();

const productSchema = Joi.object().keys({
  id,
  name: name.required(),
  price: price.required(),
  currency: currency.required(),
  description: description.required(),
  image: image.required(),
  owner: owner.required()
});

const flexibleProductSchema = Joi.object().keys({
  name,
  price,
  currency,
  description,
  image,
  owner
});

const createProductSchema = Joi.object().keys({
  product: productSchema.required()
});

const patchProductSchema = Joi.object().keys({
  product: flexibleProductSchema.required()
});

const getProductShema = Joi.object().keys({
  productId: id.required()
});

module.exports = {
  productSchema,
  createProductSchema,
  patchProductSchema,
  getProductShema
};
