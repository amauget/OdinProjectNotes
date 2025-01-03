const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:{ 
  index: './src/index.js',
  print: './src/print.js', 
  },
  plugins: [ /* run: npm install --save-dev html-webpack-plugin */
    new HtmlWebpackPlugin({
      title: 'Output Management', /* will replace current index.html */
    }),
  ],
  output:{
    filename: 'main.js', /* allows for multiple bundle names */
    path: path.resolve(__dirname, 'dist'),
    clean: true, /* removes any files that aren't a part of the current build. */
    
  },
  mode: 'production', /* this gets rid of the warning about setting mode. */
  // Run these changes with npx webpack --config webpack.config.js
  
};
