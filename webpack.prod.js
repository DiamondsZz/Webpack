const path = require("path");
const common = require("./webpack.common");
const webpackMerge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = webpackMerge.merge(common, {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({ patterns: ["public"] }),
  ],
});
