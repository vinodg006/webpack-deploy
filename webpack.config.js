var webpack = require("webpack");
var path = require("path");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  // devtool: "source-map",
  entry: {
    bundle: "./src/index.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    // name is picked from entry keyname (bundle)
    filename: "[name].[chunkhash].js",
    clean: true,
  },
  module: {
    rules: [
      // polyfills, es6 to es5
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      // css-loader to compile css and style-loader to hook in style tag in <head></head>
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    splitChunks: {
      // separate library code from src code
      cacheGroups: {
        vendor: {
          name: "vendor", // part of the bundle name and
          // can be used in chunks array of HtmlWebpackPlugin
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new TerserPlugin({
      terserOptions: {
        format: {
          comments: false,
        },
      },
      extractComments: false,
      // enable parallel running
      parallel: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
