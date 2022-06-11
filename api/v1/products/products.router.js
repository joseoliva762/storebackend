const express = require('express');
const router = express.Router();
const productsHttpHandler = require('./products.http');
const { handleProductsValidation } = require('../../middlewares/products.middlewares');
const { createProductSchema, getProductShema, patchProductSchema } = require('../../schemas/product.schema');

router.route('/')
  .get(productsHttpHandler.getProducts)
  .post(handleProductsValidation(createProductSchema, 'body'), productsHttpHandler.createProduct);

router.route('/:productId')
  .all(handleProductsValidation(getProductShema, 'params'))
  .get(productsHttpHandler.getProduct)
  .put(handleProductsValidation(createProductSchema, 'body'), productsHttpHandler.updateProduct)
  .patch(handleProductsValidation(patchProductSchema, 'body'), productsHttpHandler.patchProduct)
  .delete(productsHttpHandler.deleteProduct);

exports.router = router;
