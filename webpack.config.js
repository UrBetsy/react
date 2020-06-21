const { resolve } = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BasicPlugin = require('./plugins/baiscPlugin')
const changeOutputPlugin = require('./plugins/changeOutput')
const endWebpackPlugin = require('./plugins/endWebpackPlugin')
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
    // new BasicPlugin(),
    // new changeOutputPlugin(),
    // webapck启动后，在读取配置的过程中会先执行new BasicPlugin()，初始化一个BasicPlugin并获取实例。
    // 在初始化compiler对象后，调用basicPlugin.apply(compiler)为插件实例传入compiler对象。
    // 插件实例在获取compiler对象后，就可以通过compiler.plugin(事件名称，回调函数),监听到webpack广播的时间，
    // 就可以通过compiler对象去操作webpack
    new endWebpackPlugin( stats => {
      // webpack构建成功，并且文件输出后会执行到这里，这里可以发布文件操作
      console.log(stats)
    }, err => {
      // webpack构建失败，err是导致错误的原因
      console.error(err)
    })
  ],
  resolveLoader: {
    modules:['node_modules', './loaders']
  },
  devtool: "cheap-eval-source-map",
};
