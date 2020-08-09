const path = require('path');

module.exports = env => {
  const NODE_ENV = (env && env.production) ? 'production' : 'development'
    return {
    mode: NODE_ENV,
    entry: './ts/index.ts',
    output: {
      path: path.join(__dirname, "dist"),
      filename: "index.js"
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
    }
  }
}
