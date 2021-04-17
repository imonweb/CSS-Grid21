const path = require('path');
/* const HtmlWebpackPlugin = require('html-webpack-plugin'); */

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './myBundle.js',
  },
  devServer: {
    before: function(src,server){
      server._watch('./src/*.html')
    },
    contentBase: 
      path.resolve(__dirname,'src'),
      hot: true,
      port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.(jpg|jpeg|svg|png|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/',
          publicPath: 'images/'
        }
      }
    ]
  },
  /* plugins: [new HtmlWebpackPlugin()] */


} /* module exports end */