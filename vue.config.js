const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  
  configureWebpack: {
    devtool: 'cheap-module-source-map'
  },

  chainWebpack: config => {
    config.optimization.delete('splitChunks')
  },

  productionSourceMap: false,
})
