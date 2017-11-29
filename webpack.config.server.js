const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './server.js',
  output: {
    path: path.resolve(__dirname),
    filename: "serverProd.js"
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["es2015", "react", "stage-2"],
            plugins: ["syntax-dynamic-import", "dynamic-import-node"]
          }
        }
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