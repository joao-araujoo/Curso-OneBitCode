const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    entry: {
        script: './src/build.js',
        style: './src/build.css'
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js',
    }
}