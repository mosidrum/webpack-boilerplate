const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [

    new HtmlWebpackPlugin({
        template: './src/index.html',
    }),

  ],
  module: {

    rules: [

      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', 
      },
      {
        test: /bootstrap\/dist\/js\/umd\//,
        use: 'imports-loader?jQuery=jquery',
      },

    ],

  },
};