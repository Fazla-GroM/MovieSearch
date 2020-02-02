const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")
const GoogleFontsPlugin = require("google-fonts-plugin")

module.exports = {
  mode: "production",

  entry: path.resolve(__dirname, "../src/index.js"),

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "assets/js/index.js",
    publicPath: "/",
  },

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
            options: {},
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
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: ["file-loader"],
      },
    ],
  },

  plugins: [
    new GoogleFontsPlugin({
      fonts: [
        {
          family: "Poppins",
          variants: ["300", "400", "500", "600", "700"],
          subsets: ["latin", "latin-ext"],
        },
      ],
      filename: "assets/font.css",
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
      inject: true,
    }),
  ],

  optimization: {
    minimize: true,
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
}
