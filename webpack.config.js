module.exports = {
    entry:['@babel/polyfill' , './src/sorteador.js'],
    output:{
        path: __dirname + '/public',
        filename: 'blunde.js',
    },
    devServer :{
        contentBase : __dirname + '/public',
    },
    module :{
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use :{
                    loader : 'babel-loader',
                }
            }
        ],
    },
};