        const path = require('path');
        const HtmlWebpackPlugin = require('html-webpack-plugin');
    
        module.exports = {
            mode: 'development',
            entry: './src/index.tsx',
            output: {
                path: path.resolve(__dirname, 'dist'),
                filename: 'bundle.js'
            },
            module: {
                rules: [
                    {
                        test: /\.tsx?$/,
                        use: 'ts-loader',
                        exclude: /node_modules/
                    },
                    {
                        test: /\.css$/,
                        use: ['style-loader', 'css-loader'],
                    }, 
                    {
                        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                       loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'static/[name].[ext]',
                        }
                    },  
                    {
                        test: /\.(png|jpe?g|gif|svg)$/i,
                        type: 'asset/resource',
                            generator: {
                                filename: 'static/[name]-[hash][ext]',
                                },
                    use: [
                    {
                            loader: 'file-loader',
                            
                            options: {
                                name: 'static/[name].[ext]',
                            },
                    },],
                },
                ]
            },
            resolve: {
                extensions: ['.tsx', '.ts', '.js']
            },
            devServer: {
                static: {
                    directory: path.join(__dirname, 'public'),
                },
                compress: true,
                port: 3000,
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: './public/index.html'
                })
            ]
        };