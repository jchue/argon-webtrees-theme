const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const copyPatterns = [
  // Workaround to exclude redundant Bootstrap
  {
    from: 'vendor/fisharebest/webtrees/resources/css/vendor.css',
    to: path.resolve(__dirname, 'vendor/fisharebest/webtrees/resources/css/vendor.tmp.css'),
    transform(content) {
      return content
        .toString()
        .replace('@import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";', '/* @import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"; */');
    },
  },
];

if (process.env.NODE_ENV === 'production') {
  copyPatterns.push(
    {
      from: 'module.php',
      to: path.resolve(__dirname, 'dist/module.php'),
    },
    {
      from: 'resources/views',
      to: path.resolve(__dirname, 'dist/resources/views'),
    },
  );
}

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: {
    theme: './src/js/theme.js',
    vendor: './src/js/vendor.js',
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
  watchOptions: {
    // Prevent looping due to vendor.css workaround
    ignored: path.resolve(__dirname, './vendor'),
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, process.env.NODE_ENV === 'production' ? 'dist/resources' : 'resources'),
    clean: {
      keep: 'views',
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: copyPatterns,
    }),

    // vendor.js is only used to trigger Webpack for the vendor CSS and is not required in prod
    new FileManagerPlugin({
      events: {
        onEnd: {
          delete: [path.resolve(__dirname, 'dist/resources/js/vendor.js')],
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
};
