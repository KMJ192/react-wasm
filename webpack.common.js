const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'PRODUCTION';

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
      postcssOptions: {
        config: path.resolve(__dirname, 'postcss.config.js')
      }
  }
}

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.wasm'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        oneOf:[
          {
              test: /\.module\.s[ac]ss$/,
              use: [
                  {
                      loader: MiniCssExtractPlugin.loader
                  },
                  {
                      loader: 'css-loader',
                      options:{
                          modules: true
                      }
                  },
                  postcssLoader,
                  'sass-loader'
              ],
              exclude: /node_modules/
          },
          {
              use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                postcssLoader,
                'sass-loader'
              ],
              exclude: /node_modules/
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|tif?f|raw|bmp)$/i,
        use: [{
            loader: 'file-loader',
            options: {
                name() {
                    if(!isProd){
                        return '[path][name].[ext]';
                    }
                    return '[contenthash].[ext]';
                },
                outputPath: 'assets/'
            }
        }]
      },
      {
        test: /\.svg$/i,
        use: [{
            loader: 'url-loader',
            options: {
                limit: 8192
            }
        }]
      }
    ],
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.join(__dirname, '/dist'),
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack',
      template: './public/index.html',
      filename: 'index.html',
      minify: isProd ? {
        removeComments: true,
        useShortDoctype: true
      } : false
    }),
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[contenthash].css'
    }),
    new webpack.DefinePlugin({
        IS_PRODUCTION: isProd
    }),
  ],
  experiments: {
    syncWebAssembly: true,
    asyncWebAssembly: true
  }
};