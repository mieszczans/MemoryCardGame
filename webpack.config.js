var path = require('path');
module.exports = {
    entry: ['./app/index.js'],
    output:{
        path: path.resolve(__dirname, 'build'),
        // publicPath: 'http://localhost:8080/images',
        filename: 'bundle.js'
    },
    module:{
        loaders:[
            {
                loader:'babel-loader',
                test:/\.js$/,
                exclude:/node_modules/
            },
            {
               test: /\.(jpe?g|png|gif|svg)$/,
               include : path.join(__dirname, 'images'),
               loader  : 'url-loader',
               query:{
                   limit:10000
               }
            }
        ]
    },
    devServer:{
            port:8080,
            contentBase:'./build',
            inline:true
        }
}