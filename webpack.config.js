const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');
  return {
  entry:'./src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    , {
      test: /\.(scss|css)$/,
      use: CSSExtract.extract({
        use: [
          {
            loader:'css-loader',
            options: {
              sourceMap:true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap:true
            }
          }
        ]
      })
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
plugins:
  [CSSExtract],
  devtool: isProduction ? 'source-map' :'inline-source-map',
  devServer: {
    contentBase:path.join(__dirname, 'public'),
    historyApiFallback:true
  }
}
};
