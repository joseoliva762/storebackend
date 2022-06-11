const express = require('express');
const cors = require('cors');
const helmet = require('helmet');


const setup = (app) => {
  app.enable('strict routing');
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // cors
  const whiteList = [
    process.env.URL_ORIGIN,
    process.env.URL_ORIGIN_LOCAL,
    'http://localhost:3001'
  ];
  const corsOptions = {
    origin: (origin, callback) => {
      return !origin || whiteList.includes(origin)
        ? callback(null, true)
        : callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
  };
  app.use(cors(corsOptions));
  // helmet
  app.use(helmet());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.noSniff());
  app.use(helmet.ieNoOpen());
  app.use(helmet.frameguard());
  app.use(helmet.xssFilter());
  app.use(helmet.hsts());
  app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'"],
      imgSrc: ["'self'"],
      fontSrc: ["'self'"],
      connectSrc: ["'self'"],
      frameSrc: ["'self'"],
      mediaSrc: ["'self'"],
      objectSrc: ["'none'"],
      frameAncestors: ["'none'"],
      reportUri: '/csp-violation',
      sandbox: ['allow-forms', 'allow-scripts'],
    },
    reportOnly: false,
    setAllHeaders: false,
    disableAndroid: false,
    safari5: false,
    upgradeInsecureRequests: false,
    honorWidthHeader: false,
  }));

  // access control allow origin

};

module.exports = {
  setup
};
