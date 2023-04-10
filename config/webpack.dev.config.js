const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  devtool: "eval-cheap-source-map",
  entry: './src/main.ts',
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    })
  ]
}
