var path    = require('path');
var webpack = require('webpack');

var phaserModule = path.join(__dirname, '/node_modules/phaser/')
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js')
var pixi = path.join(phaserModule, 'build/custom/pixi.js')
var p2 = path.join(phaserModule, 'build/custom/p2.js')

module.exports = {
  entry: {
    app: [
      './src/index.js'
    ],
  },
  devtool: 'eval',
  output: {
    path: path.join(__dirname, "public"),
    filename: 'bundle.js',
  },
  resolveLoader: {
    modulesDirectories: ['..', 'node_modules']
  },
  plugins: [
    new webpack.IgnorePlugin(/vertx/)
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    alias: {
      'phaser': phaser,
      'pixi': pixi,
      'p2': p2
    },
  },
  module: {
    noParse: /scroll\-proxy\.min\.js/,
    loaders: [
      { test: /\.jsx?$/,    loader: 'react-hot!babel', include: path.join(__dirname, 'src'), exclude: '/node_modules/' },
      { test: /\.scss$/,    loader: 'style!css!sass' },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      { test: /pixi\.js/, loader: 'expose?PIXI' },
      { test: /phaser-split\.js$/, loader: 'expose?Phaser' },
      { test: /p2\.js/, loader: 'expose?p2' }
    ]
  }
};