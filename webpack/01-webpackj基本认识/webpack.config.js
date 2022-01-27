const path  = require('path')
module.exports = {

    // 简写形式 单个入口起点
    // entry: './src/main.js',
    // 对象形式的入口起点
    entry:{
        main:'./src/main.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    }
};
