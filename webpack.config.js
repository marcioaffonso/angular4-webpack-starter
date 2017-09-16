const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'app': './src/main.ts',
    'polyfills': [
      'core-js/es6',
      'core-js/es7/reflect',
      'zone.js/dist/zone'
    ]
  },
  output: {
    path: `${__dirname}/dist/`,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {test: /\.ts$/, loader: 'ts-loader'},
      {test: /\.component.ts$/, loader: 'angular2-template-loader'},
      {test: /\.html$/, loader: 'raw-loader'},
      {test: /\.css$/, loader: 'raw-loader'},
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.html', '.css']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/, `${__dirname}/src/`
    )
  ]
};
