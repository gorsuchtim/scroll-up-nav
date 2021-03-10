/**
 * @desc Production Configuration
 * Note: In package scripts using npm run clean to run rimraf
 * Rimraf deletes the existing dist folder BEFORE compiling code for production
 * This is a safety net:
 * If the build fails to to an error in the code, then the error must be resolved
 * Once resolved, re-running build will create the new dist folder
 */

const common = require("./webpack.common");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "App.dist.js"
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/html/index.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  },
  plugins: [new MiniCssExtractPlugin({ filename: "App.dist.css" })],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          use: ["babel-loader", "eslint-loader"],
          failOnError: true,
          quiet: true
        }
      }
    ]
  }
});
