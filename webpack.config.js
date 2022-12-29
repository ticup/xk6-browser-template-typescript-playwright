const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const GlobEntries = require('webpack-glob-entries');
const { IgnorePlugin } = require('webpack');

module.exports = {
    mode: 'production',
    entry: GlobEntries('./src/k6/**/*test.ts'), // Generates multiple entry for each test
    output: {
        path: path.join(__dirname, 'dist', 'k6'),
        libraryTarget: 'commonjs',
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            "@pages": path.resolve(__dirname, 'src', 'pages'),
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    target: 'web',
    externals: /^(k6|https?\:\/\/)(\/.*)?/,
    // Generate map files for compiled scripts
    devtool: "source-map",
    stats: {
        colors: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        // Copy assets to the destination folder
        // see `src/post-file-test.ts` for an test example using an asset
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'assets'),
                noErrorOnMissing: true
            }],
        })
    ],
    optimization: {
        // Don't minimize, as it's not used in the browser
        minimize: false,
    },
};