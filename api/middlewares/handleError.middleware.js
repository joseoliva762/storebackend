const { print, build } = require('../tools/reason');
const { status } = require('../tools/status');

const logError = (err, req, res, next) => {
  print.write(err);
  next(err);
};

const handleError = (err, req, res, next) => {
  if (err.statusCode) return next();
  const { internalServerError } = status;
  const response = build(internalServerError, {
    message: err.message,
    stack: err.stack
  });
  return res
    .status(response.statusCode)
    .json(response);
};

module.exports = {
  logError,
  handleError
};
