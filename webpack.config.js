const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const mode = process.env.MODE

module.exports = {
  mode,
  entry: {
    app: './src/scripts/app.js',
  },
  output: {
    path: `${__dirname}/public/scripts`,
    filename: 'app.min.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: mode === 'development',
              },
            },
            'sass-loader',
            'import-glob-loader',
          ],
        }),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 51200,
              name: '../images/other/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('../stylesheets/style.css'),
    new ESLintPlugin({
      fix: true,
    }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: `${__dirname}/public`,
    port: 3000,
    open: true,
  },
}
