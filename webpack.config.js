const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  // https://webpack.js.org/configuration/target/
  // see target later and experiment with front and back end builds
  target: "web",
  // set to none and let npm scripts pass w/ CLI --mode
  mode: "none",
  // webpack-dev-server will monitor the code dependency
  // of these entry points, and re-create the bundle
  // when changes are detected.
  entry: ["./src/js/index.js", "./src/sass/main.sass", "./src/index.html"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/[name].js"
  },
  devtool: "inline-source-map",
  // regex statement to identify the JavaScript files to be transpiled
  // with the babel-loader (except node_modules). Babel-loader is told
  // to use the babel-preset-env (transpile parameters .babelrc)
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader?compact=false",
          options: {
            presets: ["babel-preset-react"]
          }
        }
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: "url-loader?limit=10000",
          options: {
            name: "[name].[ext]",
            outputPath: "fonts/"
          }
        }
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "fonts/"
          }
        }
      },
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"]
      // },
      {
        test: /\.sass$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "css/[name].css"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            // parses the CSS into JavaScript and resolves any dependencies
            loader: "css-loader?-url"
          },
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: "./postcss.config.js"
              }
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "img/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.mp3$/,
        loader: "file-loader",
        query: {
          name: "audio/[name].[ext]"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    // host can be omitted unless you are using 'docker'
    // host: '0.0.0.0',
    clientLogLevel: "info",
    compress: true,
    port: 8080,
    watchContentBase: true,
    headers: {
      "X-Custom-Header": "yes"
    },
    stats: {
      colors: true
    }
    // https: {
    //   cert: fs.readFileSync('path-to-cert-file.pem'),
    //   key: fs.readFileSync('path-to-key-file.pem'),
    //   cacert: fs.readFileSync('path-to-cacert-file.pem')
    // }
  }
};
