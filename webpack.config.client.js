const webpack = require('webpack');
const path = require('path');
const { ReactLoadablePlugin } = require('react-loadable/webpack');

module.exports = {
  entry: {
    'bundle': [
      './src/index'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    publicPath: "/",
    filename: "[name].js"
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["es2015", "react", "stage-2"],
            plugins: ["syntax-dynamic-import", "react-loadable/babel"]
          }
        }
      },{
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      },{
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/public/[name].[ext]',
              publicPath: url => url.replace('/public/', 'public/')
            }
          }
        ]
      }
    ]
  },
  plugins : [
    new ReactLoadablePlugin({
      filename: './dist/react-loadable.json',
    }),
  ],
};