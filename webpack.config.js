const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';

const extractSass = new ExtractTextPlugin({
  filename: `css/[name].css`
});

const config = {
  entry: ['babel-polyfill', 'whatwg-fetch', 'normalize.css', './app/css/main.scss',  './app/js/index.js'],
  output: {
    filename: `js/[name].js`,
    path: __dirname + '/app/' ,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          'babel-loader',
          'eslint-loader',
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: extractSass.extract([{
          loader: 'css-loader'
        }, {
          loader: 'postcss-loader'
        }, {
          loader: 'sass-loader'
        }])
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader?name=[name].[ext]',
        }]
      },
      {
        test: /\.(svg|gif|png)$/,
        use: [{
          loader: 'file-loader?name=[name].[ext]',
        }]
      }

    ]
  },
  plugins: [
    extractSass
  ]
};

if (isProduction) {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;
