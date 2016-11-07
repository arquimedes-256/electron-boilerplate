var webpack = require('webpack');
var path = require('path');

var outputConfig = {
    path: __dirname + '/app/',
    filename: 'app.js'
};

module.exports = {
	entry: './app.ts',
	output: outputConfig,
    context: __dirname + '/src',
	module: {
		loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.js$/, 
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
              test: /\.scss$/,
              loader: 'style!css!sass!sasslint'
            },
			{
				test: /\.css$/,
				loader: "style!css"
			}
		],
	},
    resolve: {
        root: [
            path.resolve('./app/node_modules'),
        ],
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    target: 'electron',
    ts: {
        "compilerOptions": {
            "baseUrl": "./app"
        }
    }
};
