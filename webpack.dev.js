const webpack = require("webpack");
const path = require("path");
const common = require("./webpack.common");
const webpackMerge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = webpackMerge.merge(common, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    hot: true,
    contentBase: "public",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
