const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:{ 
  index: './src/index.js',
  print: './src/print.js', 
  },
  plugins: [ /* run: npm install --save-dev html-webpack-plugin */
    new HtmlWebpackPlugin({
      title: 'development', /*changed from Output Management */
    }),
  ],
  devtool: 'inline-source-map', /* used to trace back errors past the bundle to exact file/line location */
  devServer: {
    static: './dist', /* This tells webpack-dev-server to serve the files from the dist directory */
  },
  output:{
    filename: '[name].bundle.js', /* allows for multiple bundle names */
    path: path.resolve(__dirname, 'dist'),
    clean: true, /* removes any files that aren't a part of the current build. */
    publicPath: '/', /* run */
  },
  mode: 'development', /*changed from production */
  // Run these changes with npx webpack --config webpack.config.js
  optimization: {
    runtimeChunk: 'single', /*used due to our multiple entry points on our single html page.  */
  },
};
