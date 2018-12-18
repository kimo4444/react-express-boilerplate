const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



module.exports = (env) => {

  return {
    mode: 'development',
  entry:'./src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  },
  plugins:
    [
      new MiniCssExtractPlugin({filename: "styles.css"})
],

  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
      test: /\.(sc|c)ss$/,
       use: [
         MiniCssExtractPlugin.loader,
         'css-loader',
         'sass-loader',
       ],
     },
     {
        test: /\.(gif|jpe?g|png|ico)$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
  ],
},

  devServer: {
    contentBase:path.join(__dirname, 'public'),
    historyApiFallback:true
  }
}
};
