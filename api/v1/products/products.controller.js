// const axios = require('axios');
const reason = require('../../tools/reason');
const uuid = require('uuid');
// const { to } = require('../../tools/to');
const { status } = require('../../tools/status');

// mock data
const products = [];

const getProducts = () => {
  return new Promise((resolve) => {
    const handleController = async () => {
      resolve(reason.build(status.succsess, { products }));
    };
    return handleController();
  });
};

const createProduct = (product) => {
  return new Promise((resolve) => {
    const handleController = async () => {
      const id = uuid.v4();
      products.push({ id, ...product });
      resolve(reason.build(status.created, { productId: id }));
    };
    return handleController();
  });
};

const getProduct = (productId) => {
  return new Promise((resolve, reject) => {
    const handleController = async () => {
      const product = products.filter((product) => product.id === productId);
      if (product.length > 1) return reject(reason.build(status.internalServerError, null, 'More than one product found'));
      if (!product.length) return reject(reason.build(status.notFound, null));
      resolve(reason.build(status.succsess, { product: product[0] }));
    };
    return handleController();
  });
};

const updateProduct = (productId, product) => {
  return new Promise((resolve, reject) => {
    const handleController = async () => {
      const productToUpdate = products.filter((product) => product.id === productId);
      if (productToUpdate.length > 1) return reject(reason.build(status.internalServerError, null, 'More than one product found'));
      if (!productToUpdate.length) return reject(reason.build(status.notFound, null));
      const updatedProduct = {
        ...productToUpdate[0],
        ...product
      };
      const index = products.indexOf(productToUpdate[0]);
      products[index] = updatedProduct;
      resolve(
        reason.build(status.succsess, {
          product: { ...updatedProduct }
        })
      );
    };
    return handleController();
  });
};

const deleteProduct = (productId) => {
  return new Promise((resolve, reject) => {
    const handleController = async () => {
      const productToDelete = products.filter((product) => product.id === productId);
      if (productToDelete.length > 1) return reject(reason.build(status.internalServerError, null, 'More than one product found'));
      if (!productToDelete.length) return reject(reason.build(status.notFound, null));
      const index = products.indexOf(productToDelete[0]);
      products.splice(index, 1);
      resolve(reason.build(status.succsess));
    };
    return handleController();
  });
};

module.exports = {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct
};
