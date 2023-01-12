const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.tsx',
    },
    output: {
        path: path.resolve(__dirname, './output'),
        filename: '[id].bundle.js',
    },
    devtool: 'cheap-module-source-map',
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    },
                },
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: { loader: 'html-loader' },
            },
        ],
    },
    devServer: {
        host: '127.0.0.1',
        port: 8080,
    },
    stats: {
        children: true,
    },
};
