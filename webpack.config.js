
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: [
        '@babel/polyfill',
        './src/assets/bootstrap/js/bootstrap.min.js',
        './node_modules/jquery/dist/jquery.js',
        './src/assets/js/current-day.js', 
        './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        publicPath: ''
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=10000&name=img/[name].[ext]'
            },
            {
                test: require.resolve('jquery'),
                loader: 'expose-loader',
                options: {
                  exposes: ['$', 'jQuery'],
                },
              },
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/public/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};