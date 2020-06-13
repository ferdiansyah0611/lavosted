const path = require('path');

module.exports = {
	watch: true,
	mode: 'development',
  	entry: './src/js/index.js',
    devServer: {
    	contentBase: path.join(__dirname, 'dist'),
    	compress: true,
    	port: 9000,
    	allowedHosts: [
      'host.com',
      'subdomain.host.com',
      'subdomain2.host.com',
      'host2.com'
    ]
  	},
  	output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};