const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const webpack = require('webpack');

const config = {
  devServer: {
    open: true,
    overlay: true,
    historyApiFallback: true,
    inline: true,
    port: 3000,
    hot: true,
    publicPath: '/',
  },
  mode: 'development',
  devtool: 'eval',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = merge(common, config);