const path = require('path');

module.exports = [
  {
    output: {
      filename: 'content.js',
      path: path.resolve(__dirname, '../extension/js'),
    },
    name: 'content',
    entry: './content/index.js',
    mode: 'production',
  },
  {
    output: {
      filename: 'options.js',
      path: path.resolve(__dirname, '../extension/js'),
    },
    name: 'options',
    entry: './options/index.js',
    mode: 'production',
  },
  {
    output: {
      filename: 'popup.js',
      path: path.resolve(__dirname, '../extension/js'),
    },
    name: 'popup',
    entry: './popup/index.js',
    mode: 'production',
  },
  {
    output: {
      filename: 'background.js',
      path: path.resolve(__dirname, '../extension/js'),
    },
    name: 'background',
    entry: './background/index.js',
    mode: 'production',
  },
]
