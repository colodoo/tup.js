const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: {
        tup: __dirname + '\\src\\tup.js',
    },
    output: {
        path: __dirname + '\\dist',
        filename: '[name].js',
        library: 'Tup',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    // plugins: [
    //     new UglifyJsPlugin()
    // ]
}