const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isStaticBuild = Boolean(process.env.BUILD_STATIC);

module.exports = {
  entry: path.resolve(__dirname, path.join('src', 'index.js')),
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: isStaticBuild ? './' : '/',
    filename: 'bundle.js',
    chunkFilename: '[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: ['node_modules'],
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          cache: true
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            plugins: [
              '@babel/plugin-transform-runtime',
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }]
            ],
            presets: [
              '@babel/preset-env',
              '@vue/babel-preset-jsx'
            ]
          }
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new WebpackBar(),
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: 'favicon.ico',
      inject: true
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true
  }
};
