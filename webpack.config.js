module.exports = {
    entry: './src/app/index.js',
    output: {
        path: __dirname + '/src/public',
        filename: 'bundle.js' 
    },

    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },

            {
                test:/\.(s*)css$/,
                use:['style-loader','css-loader', 'sass-loader']
             }
        ]
    }
}