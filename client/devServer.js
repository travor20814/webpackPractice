import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import debug from 'debug';

const debugServer = debug('WEB:DevServer');

const PORT = process.env.DEV_PORT || process.env.PORT || 6789;
const app = express();

const webpackConfig = webpack({
  devtool: 'cheap-eval-source-map',
  entry: path.join(__dirname, 'entry.js'),
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      URL_BASEPATH: `"${process.env.URL_BASEPATH || '/'}"`,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: [
        'react-hot',
        'babel',
      ],
      exclude: /node_modules/,
      include: __dirname,
    }],
  },
});

app.use(webpackDevMiddleware(webpackConfig, {
  noInfo: true,
  publicPath: '/',
}));
app.use(webpackHotMiddleware(webpackConfig));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, (err) => {
  if (err) {
    debug(err);
  } else {
    debugServer(`Client Dev Server running on port: ${PORT}`);
  }
});
