const webpack = require('webpack');
const path = require('path');
const { ReactLoadablePlugin } = require('react-loadable/webpack');

const clientConfig = {
  entry: {
    'bundle': [
      'babel-polyfill',
      'react-hot-loader/patch',
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
        loader: 'babel-loader',
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

const serverConfig = {
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "server.js"
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },{
        test: /.css$/,
        use: [{
          loader: 'css-loader/locals'
        }]
      },{
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/public/[name].[ext]',
              publicPath: url => url.replace('/public/', 'public/'),
              emit: false,
            }
          }
        ]
      }
    ]
  },
};

module.exports = [clientConfig];