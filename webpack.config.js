const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/main.js",
    publicPath: "/assets/",
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(mp4|webm|ogg)$/i,
        type: "asset/resource", // Sempre un file separato
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset", // Automazione per le immagini
      },
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    // open: true,
    port: 9000,
  },
};