const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");

const styleLoader = {
  loader: "style-loader",
};

module.exports = {
  // es5 required to maintain IE11 support
  target: ["web", "es5"],
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      },
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        loader: "source-map-loader",
      },
      {
        test: /\.css$/i,
        use: [styleLoader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [styleLoader, {
          loader: "css-loader"
        }, {
          loader: "postcss-loader",
        }, {
          loader: "sass-loader"
        }]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            },
          },
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
  entry: merge({
    "app": "./src/index.tsx",
  }),
};
