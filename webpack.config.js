const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'main.js'
  },
  // This uses a regex statement to identify the JavaScript files to be transpiled with the babel-loader, whilst excluding anything in the node_modules folder from that. Lastly, the babel-loader is told to use the babel-preset-env package installed earlier, to establish the transpile parameters set in the .babelrc file.
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000
  }
};