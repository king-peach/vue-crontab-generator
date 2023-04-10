const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/main.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../lib'),
    clean: true
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', 'json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js', // vue template compiler config
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.tsx?$/i,
        use: [
          {
            loader: 'ts-loader',
            options: {
              // Add ts for vue file suffix
              appendTsSuffixTo: [/\.vue$/],
            }
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
