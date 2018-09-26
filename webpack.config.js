const {resolve} = require('path');
const webpack = require('webpack');
const devMode = process.env.NODE_ENV !== 'production'
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // css导出为css文件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // js文件压缩
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin'); // css文件压缩
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: resolve(__dirname,'./dist'),
        filename:'bundle.js'
    },
    resolve:{
        alias:{
            '@':resolve(__dirname,'./src')
        }
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env','@babel/preset-react']
                    }
                },
                exclude:/node_modules/,
                include:resolve(__dirname,'./src')
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ],
                // exclude:/node_modules/,
                include:resolve(__dirname,'./src')
            },
            {
                test: /\.(png|jpg|woff|woff2|eot|svg|bmp|gif)/,
                use:[
                    {
                        loader:'url-loader',
                        options:{limit:4096}
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: resolve(__dirname,'./dist'),
        port: 8010,
        hot: true,
        open:true,
        host:'192.168.2.104'
    },
    devtool: 'eval-source-map',
    optimization:{
        minimizer:[
            // new UglifyJsPlugin({
            //     cache: true, // 启用缓存
            //     parallel: true, // 启用多进程运行改进编译速度
            //     sourceMap:true // 生成sourceMap隐射文件
            // }),
            new OptimizeCssAssetsWebpackPlugin({}) // 压缩css
        ]
    },
    plugins:[
        // 该插件的作用就是实现模块热替换，实际上当启动时带上 `--hot` 参数，会注入该插件，生成 .hot-update.json 文件。
        new webpack.NamedModulesPlugin(), // 用于启动 HMR 时可以显示模块的相对路径
        new webpack.HotModuleReplacementPlugin(), // Hot Module Replacement 的插件
        new MiniCssExtractPlugin({
            filename:devMode?'css/[name].css':'css/[name].[hash]css', // 导出到dist文件夹下的css文件夹内
            chunkFilename:devMode?'css/[id].css':'css/[id].[hash]css'
        }),
        new HtmlWebpackPlugin({
            template:resolve(__dirname,'./src/index.html'),
            filename:'index.html'
        })
    ]

}