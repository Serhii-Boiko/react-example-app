const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.js');

const resolve = dir => path.join(__dirname, '..', '..', dir);

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    cache: true,
    devtool: 'eval',
    watchOptions: {
        poll: true
    },
    devServer: {
        contentBase: [
            resolve('./dist/'),
            resolve('./src/'),
        ],
        publicPath: '/assets/',
        historyApiFallback: true,
        inline: true,
        hot: true,
        port: 3000,
    },
    context: resolve('./src'),
    entry: [
        '@babel/polyfill',
        'webpack/hot/only-dev-server',
        resolve('./src/index.js'),
    ],
    output: {
        path: resolve('./dist/assets'),
        filename: 'app.js',
        publicPath: '/assets/',
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'eslint-loader',
                    options: {
                        emitWarning: true,
                    },
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        extends: resolve('.babelrc'),
                        cacheDirectory: true,
                    },
                },
            },
            {
                test: /^.((?!cssmodule).)*\.css$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            sourceMap: true,
                        },
                    }
                ]
            },
            {
                test: /^.((?!cssmodule).)*\.(sass|scss)$/,
                loaders: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            }, {
                test: /^.((?!cssmodule).)*\.less$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                        },
                    }, {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
});
