const common = require("./webpack.common");
const merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  devtool: "source-map",
  mode: "development",
  output: {
    filename: "App.dev.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader?sourceMap", "sass-loader"]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader"
        ]
      }
    ]
  }
});
