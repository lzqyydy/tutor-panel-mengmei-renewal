const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: {
    index: './sources/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.(png|svg|jpg|gif)$/, use: [ 'file-loader' ] },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: [ 'file-loader' ] },
      { test: /\.vue$/, use: [ 'vue-loader' ] }
    ]
  },
  plugins: [
    // new UglifyJsPlugin()
  ]
};
