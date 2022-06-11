const productsController = require('./products.controller');
const { to } = require('../../tools/to');

const getProducts = async (req, res) => {
  // implementa query filters
  const [errorFetchingProducts, products] = await to(productsController.getProducts());
  const response = errorFetchingProducts || !products
    ? errorFetchingProducts
    : products;
  return res.status(response.statusCode).json(response);
};

const createProduct = async (req, res) => {
  const { product } = req.body;
  // validar product
  const [errorCreatingProduct, created] = await to(productsController.createProduct(product));
  const response = errorCreatingProduct || !created
    ? errorCreatingProduct
    : created;
  return res.status(response.statusCode).json(response);
};

const getProduct = async (req, res) => {
  const { productId } = req.params;
  const [errorFetchingProduct, product] = await to(productsController.getProduct(productId));
  const response = errorFetchingProduct || !product
    ? errorFetchingProduct
    : product;
  return res.status(response.statusCode).json(response);
};

const updateProduct = async (req, res) => {
  const { productId } = req.params;
  const { product } = req.body;
  const [errorUpdatingProduct, updated] = await to(productsController.updateProduct(productId, product));
  const response = errorUpdatingProduct || !updated
    ? errorUpdatingProduct
    : updated;
  return res.status(response.statusCode).json(response);
};

const patchProduct = async (req, res) => {
  const { productId } = req.params;
  const { product } = req.body;
  const [errorUpdatingProduct, updated] = await to(productsController.updateProduct(productId, product));
  const response = errorUpdatingProduct || !updated
    ? errorUpdatingProduct
    : updated;
  return res.status(response.statusCode).json(response);
};

const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  const [errorDeletingProduct, deleted] = await to(productsController.deleteProduct(productId));
  const response = errorDeletingProduct || !deleted
    ? errorDeletingProduct
    : deleted;
  return res.status(response.statusCode).json(response);
};

module.exports = {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  patchProduct,
  deleteProduct
};
