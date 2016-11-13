var path    = require('path');
var webpack = require('webpack');

var initClient = path.join(__dirname, '/spec/alias/initClient.js');

module.exports = {
  resolve: {
    alias: {
      '../../../actions/initClient': initClient
    }
  },
};