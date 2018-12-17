const { resolve } = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const SOURCE_DIR = resolve( __dirname, 'src' )
const OUTPUT_DIR = resolve( __dirname, 'dist' )

module.exports = {
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: SOURCE_DIR,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: { extensions: ['.js', '.jsx'] },
  plugins: [
    // Eliminate old bundle versions (prod) or interference with in-memory file (dev)
    new CleanWebpackPlugin(OUTPUT_DIR),
    new HtmlWebpackPlugin({
      template: 'index.html.template'
    })
  ]
}