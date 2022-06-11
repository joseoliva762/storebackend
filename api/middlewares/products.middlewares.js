const { build } = require('../tools/reason');
const { status } = require('../tools/status');

const handleProductsValidation = (schema, property) => {
  return (req, res, next) => {
    if (!['query', 'body', 'params'].includes(property) || !schema || !req?.[property]) {
      const { internalServerError } = status;
      return res.status(internalServerError.statusCode).json(build(internalServerError, {
        message: `Invalid property: ${property}`
      }));
    }
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (!error) return next();
    const { badRequest } = status;
    return res.status(badRequest.statusCode).json(build(badRequest, {
      message: error.message
    }));
  };
};

module.exports = {
  handleProductsValidation
};
