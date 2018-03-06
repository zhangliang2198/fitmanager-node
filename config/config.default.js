'use strict';

module.exports = appInfo => {
  var exports;
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1520317992213_862';

  // add your config here
  config.middleware = [];

  exports.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: [ 'http://localhost:8000' ]
  };

  exports.cors = {
    origin :'*',
  };

  return config;
};
