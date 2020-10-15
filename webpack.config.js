const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    foo: "./src/main.js",
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[name].js",
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        // asyncComponents: {
        //   chunks: "async",
        //   name: "async-components",
        // },
        vendorsSync: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor-sync",
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [new HtmlWebpackPlugin()],
};
