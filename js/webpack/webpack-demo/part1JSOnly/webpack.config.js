const path = require('path');

module.exports = {
  entry: './src/index.js',
  output:{
    filename:'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production', /* this gets rid of the warning about setting mode. */
};

// Run these changes with npx webpack --config webpack.config.js