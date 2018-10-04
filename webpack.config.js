const path = require('path');

module.exports = {
  // https://webpack.js.org/configuration/target/
  // see target later and experiment with front and back end builds
  target: 'web',
  // set to none and let npm scripts pass w/ CLI --mode
  mode: 'none',
  // webpack-dev-server will monitor the code dependency
  // of these entry points, and re-create the bundle
  // when changes are detected.
  entry: {
    app: ['./src/js/index.js']
  },
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
    // host can be omitted unless you are using 'docker'
    // host: '0.0.0.0',
    clientLogLevel: 'info',
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    inline: true,
    port: 9000,
    publicPath: '/js/',
    watchContentBase: true,
    headers: { "X-Custom-Header": "yes" },
    stats: { colors: true },
    // https: {
    //   cert: fs.readFileSync("path-to-cert-file.pem"),
    //   key: fs.readFileSync("path-to-key-file.pem"),
    //   cacert: fs.readFileSync("path-to-cacert-file.pem")
    // }
  }
};