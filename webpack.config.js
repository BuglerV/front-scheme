const path = require('path');

module.exports = {
    mode: 'development',
	devtool: 'source-map',
	entry: {
		libraries: './resources/js/libraries.js',
		index: './resources/js/index.js'
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname,'js')
	}
}
