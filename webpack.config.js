const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: {
        main: __dirname + '\\src\\main.js',
    },
    output: {
        path: __dirname + '\\dist',
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin()
    ]
}