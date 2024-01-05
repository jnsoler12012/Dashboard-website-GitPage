const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

module.exports = {
    entry: `${__dirname}/src/index.js`,
    output: {
        path: `${__dirname}/dist`,
        clean: true,
        //publicPath: '/dist/',
        publicPath: './dist/',
        filename: '[contenthash].js',
    },
    devServer: {
        historyApiFallback: {
            rewrites: [{ from: /\//, to: '/404.html' }],
        },
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        modules: ['node_modules'],
        alias: {
            Utilities: path.resolve(__dirname, 'src/UI/assets/img'),
        },
    },
    devtool: process.argv.indexOf('-p') === -1 ? 'eval-source-map' : 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'custom name',
            template: './src/base-index.html',
        }),
        //new BundleAnalyzerPlugin(),
        new WebpackShellPluginNext({
            onBuildEnd: {
                scripts: ['node copy-html-hashed.js'],
                blocking: false,
                parallel: true
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'src')],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [

                        ]
                    },

                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets',
                            name: `[contenthash].[ext]`,
                            publicPath: './dist/assets',
                        },
                    }
                ]
            }
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 17000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            automaticNameDelimiter: "_",
            enforceSizeThreshold: 30000,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all",
                    name: "vendors",
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
                // we are opting out of defaultVendors, so rest of the node modules will be part of default cacheGroup
                defaultVendors: false,
                reactPackage: {
                    test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom)[\\/]/,
                    name: 'vendor_react',
                    chunks: "all",
                    priority: 10,
                }
            },
        },
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
        ],
    },
}