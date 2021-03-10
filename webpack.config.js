const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "App.dev.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader?-url",
            {
                loader: "postcss-loader",
            },
            {
                loader: "sass-loader",
            },
        ],
      },
    ],
  },
};
