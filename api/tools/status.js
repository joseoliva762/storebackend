const status = {
  succsess: {
    statusCode: 200,
    message: 'OK'
  },
  created: {
    statusCode: 201,
    message: 'Created'
  },
  noContent: {
    statusCode: 204,
    message: 'No Content'
  },
  deleted: {
    statusCode: 204,
    message: 'Deleted'
  },
  badRequest: {
    statusCode: 400,
    message: 'Bad Request'
  },
  unauthorized: {
    statusCode: 401,
    message: 'Unauthorized'
  },
  forbidden: {
    statusCode: 403,
    message: 'Forbidden'
  },
  notFound: {
    statusCode: 404,
    message: 'Not Found'
  },
  conflict: {
    statusCode: 409,
    message: 'Conflict'
  },
  internalServerError: {
    statusCode: 500,
    message: 'Internal Server Error'
  },
  notImplemented: {
    statusCode: 501,
    message: 'Not Implemented'
  },
  badGateway: {
    statusCode: 502,
    message: 'Bad Gateway'
  },
  serviceUnavailable: {
    statusCode: 503,
    message: 'Service Unavailable'
  },
  gatewayTimeout: {
    statusCode: 504,
    message: 'Gateway Timeout'
  },
  versionNotSupported: {
    statusCode: 505,
    message: 'HTTP Version Not Supported'
  },
  networkAuthenticationRequired: {
    statusCode: 511,
    message: 'Network Authentication Required'
  }
};

module.exports = {
  status
};
