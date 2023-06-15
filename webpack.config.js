const path = require('path');

const isDev = process.env.NODE_ENV === "development";

module.exports = {
    mode: isDev ? "development" : "production",
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: {
        static: './dist'
    },
};