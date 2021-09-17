const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");
const path = require("path");

module.exports = merge(common, {
    mode: "production",
    output: {
        path: path.resolve(__dirname, "build"),
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
});
