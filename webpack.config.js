const { resolve } = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  context: __dirname,
  entry:  [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    './app/index.js'
  ],
  output: {
    path: resolve(__dirname, 'build'),//打包后的文件存放的地方
    filename: "bundle.js",//打包后输出文件的文件名
    publicPath: "/"
  },
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    hot: true,
    publicPath:'/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
          'comment-require-loader',
          'auto-require-less'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader'],
        exclude: /node_modules/
      },
      { test:/\.less$/,
        use:['style-loader','css-loader','less-loader'],
        exclude: /node_modules/
      },
      // {
      //   test: /\.scss/,
      //   use: [
      //     'style-loader',
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         minimize: true
      //       }
      //     },
      //     'sass-loader'
      //   ]
      // }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  resolveLoader: {
    modules:['node_modules', './loaders']
  },
  devtool: "cheap-eval-source-map",
};
