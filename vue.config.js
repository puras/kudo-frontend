const path = require('path')
const { name } = require('./package')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    devServer: {
        hot: true,
        disableHostCheck: true,
        port: 4200,
        overlay: {
            warnings: false,
            errors: true
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src')
            }
        },
        output: {
            library: `${name}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`
        }
    }
}
