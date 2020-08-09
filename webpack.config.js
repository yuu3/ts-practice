const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => {
  const NODE_ENV = (env && env.production) ? 'production' : 'development'
    return {
    mode: NODE_ENV,
    entry: './src/index.ts',
    output: {
      path: path.join(__dirname, "dist"),
      filename: "index.js"
    },
    devtool: NODE_ENV === 'development' ? 'inline-source-map' : 'none',
    watch: NODE_ENV === 'development',
    devServer: {
      clientLogLevel: 'warning',
      contentBase: path.resolve(__dirname, './dist'),
      overlay: true,
      inline: true,
      disableHostCheck: true,
      port: 3000
    },
    module: {
      rules: [{
        test: /\.ts$/,
        use: 'ts-loader'
      }]
    },
    resolve: {
      modules: [
        "node_modules",
      ],
      extensions: [
        '.ts',
        '.js'
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './public/index.html'),
        filename: 'index.html',
      })
    ]
  }
}
