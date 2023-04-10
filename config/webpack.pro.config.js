const package = require('../package.json')

const dependencies = package.dependencies
const externals = Object.keys(dependencies).reduce((pre, curr) => {
  pre[curr] = curr
  return pre
}, {})

module.exports = {
  entry: './src/index.ts',
  output: {
    //...
    library: 'VueCrontable',
    chunkFormat: 'module',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals,
  optimization: {
    minimize: false,
  }
}