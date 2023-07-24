const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[name][ext]",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./"),
    },
    port: 3000,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "styles/style.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
};
