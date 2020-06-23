const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        
      },
    ],
  },
	watch: true,
	mode: 'development',
  	entry: './src/js/index.js',
    devServer: {
    	contentBase: path.join(__dirname, 'dist'),
    	compress: true,
  	},
  	output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};