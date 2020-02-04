const path = require("path")
const Dotenv = require("dotenv-webpack")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin")
const GoogleFontsPlugin = require("google-fonts-plugin")

module.exports = {
  mode: "development",

  stats: "minimal",

  entry: path.resolve(__dirname, "../src/index.js"),

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "static/js/index.js",
    publicPath: "/",
  },

  devServer: {
    compress: true,
    historyApiFallback: true,
    open: true,
    overlay: false,
    // host: "192.168.43.32",
    port: 3000,
    hot: true,
  },

  devtool: "cheap-module-source-map",

  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
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
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              // Images larger than 10 KB won’t be inlined
              limit: 10 * 1024,
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
          },
          {
            loader: "svg-url-loader",
            options: {
              // Images larger than 10 KB won’t be inlined
              limit: 10 * 1024,
              // Remove quotes around the encoded URL –
              // they’re rarely useful
              noquotes: true,
            },
          },
        ],
      },
      {
        // Match woff2 in addition to patterns like .woff?v=1.1.1.
        test: /\.(woff|woff2)?$/,
        use: {
          loader: "url-loader",
          options: {
            // Limit at 50k. Above that it emits separate files
            //limit: 50000,

            // url-loader sets mimetype if it's passed.
            // Without this it derives it from the file extension
            mimetype: "application/font-woff",

            // Output below fonts directory
            name: "./static/[name].[ext]",
          },
        },
      },
    ],
  },

  plugins: [
    new Dotenv(),
    new ErrorOverlayPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
      inject: true,
    }),
    // new GoogleFontsPlugin({
    //   fonts: [
    //     {
    //       family: "Poppins",
    //       variants: ["300", "400", "500", "600", "700"],
    //       subsets: ["latin", "latin-ext"],
    //     },
    //   ],
    //   filename: "assets/font.css",
    // }),
  ],
}
