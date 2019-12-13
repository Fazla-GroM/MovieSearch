const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");

module.exports = function(_env, argv) {
    const isProduction = argv.mode === "production";
    const isDevelopment = !isProduction;
    console.log(argv.mode);

    return {
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "assets/js/index.js",
            publicPath: "/",
        },
        devServer: {
            compress: true,
            historyApiFallback: true,
            open: true,
            overlay: false,
            host: "0.0.0.0",
            port: 3000,
        },

        devtool: isDevelopment && "cheap-module-source-map",

        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react",
                                "@emotion/babel-preset-css-prop",
                            ],
                            plugins: [
                                "@babel/plugin-syntax-dynamic-import",
                                "@babel/plugin-proposal-optional-chaining",
                            ],
                        },
                    },
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.(png|jpg|gif|svg)$/i,
                    loader: "file-loader",
                },
                /*{
                    test: /\.svg$/,
                    use: ['@svgr/webpack']
                },*/
                {
                    test: /\.(eot|otf|ttf|woff|woff2)$/,
                    use: ["file-loader"],
                },
            ],
        },
        plugins: [
            new Dotenv(),
            new ErrorOverlayPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "public/index.html"),
                inject: true,
            }),
        ],
        optimization: {
            minimize: isProduction,
            minimizer: [
                new TerserWebpackPlugin({
                    terserOptions: {
                        compress: {
                            comparisons: false,
                        },
                        mangle: {
                            safari10: true,
                        },
                        output: {
                            comments: false,
                            ascii_only: true,
                        },
                        warnings: false,
                    },
                }),
            ],
        },
    };
};
