const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output:{
    filename:'bundle.js', /* changed from main.js */
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production', /* this gets rid of the warning about setting mode. */
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // title: 'Webpack 5 Video Tutorials',
      filename: 'index.html',
      inject: 'body', /* injects bundle into bottom of body tag */

    }) /* npm run build now creates dist directory and populates w/ index.html and bundle.js */
  ]
}
// Run these changes with npx webpack --config webpack.config.js
