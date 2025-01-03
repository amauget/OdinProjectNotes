const path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

module.exports = {
  entry: './src/index.js',
  output:{
    filename:'bundle.js', /* changed from main.js */
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production', /* this gets rid of the warning about setting mode. */

/* add CSS module below */
  module:{
    rules:[
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], 
        /* chain is executed in reverse order. the order of the loaders matters! */
      },
      // loading images:
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        // now adding images of these filetypes to src can be bundled.
      },
      //Loading fonts:
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      //loading data:
      { /* start with  npm install --save-dev csv-loader xml-loader*/
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
      // json5 toml yamljs start w/ : npm install toml yamljs json5 --save-dev
        //All three of these are defined at the top of file.
      {
        test: /\.toml$/i,
        type: 'json',
        parser: {
          parse: toml.parse,
        },
      },
      {
        test: /\.yaml$/i,
        type: 'json',
        parser: {
          parse: yaml.parse,
        },
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse,
        },
      },
      
    ],
  },

};

// Run these changes with npx webpack --config webpack.config.js


// Loading CSS:
/* 
  npm install --save-dev style-loader css-loader
*/