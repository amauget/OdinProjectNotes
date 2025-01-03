const HtmlWebpackPlugin = require('html-webpack-plugin');
/* This file automatically builds an HTML file in the dist file. */
plugins:[
  new HtmlWebpackPlugin({
    template: './src/template.html',
  }),
],
/* If there is an index.html file in dist directory, this will overwrite it. */