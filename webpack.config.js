const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: "./index.js",
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        port: 4200
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html"
        }),
        new CleanWebpackPlugin,
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: path.resolve(__dirname, "src/favicon.ico"), to: path.resolve(__dirname, "dist")}
            ]
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s[ca]ss$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader, options: {}
                    },
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.ttf$/,
                use: "file-loader"
            }
        ]
    }
}