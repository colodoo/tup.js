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
    devServer: {
        contentBase: "./examples",  //以examples为根目录提供文件
        colors: true,
        historyApiFallback: true,
        inline: true
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