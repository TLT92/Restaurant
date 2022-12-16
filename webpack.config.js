const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    mode: 'development',
    path: path.resolve(__dirname, 'dist'),
  },
};