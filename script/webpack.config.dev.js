const webpack = require('webpack');
const path = require('path');
const {merge} = require('webpack-merge');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    entry: {
        index: path.join(__dirname, '../src/index.ts')
    },
    stats: 'errors-only',
    devServer: {
        port: '8890',
        host: '127.0.0.1',
        compress: true,
        hot: true,
        open: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        // static: {
        //     directory: path.join(__dirname, 'assets'),
        //     publicPath: '/static',
        //     watch: true
        // },
        watchFiles: {
            paths: ['src/**/*', 'assets/*'],
            options: {
                polling: 100
            }
        },
        historyApiFallback: true
    }
})
