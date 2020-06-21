// 

class readPlugin{
    
    apply(compiler) {
        // emit事件发生时候，代表源文件的转换和组装完成，这里可以读取到最终即将输出的资源，代码块，模块，以及依赖
        // 并且可以修改输出资源的内容
        compiler.plugin('emit', function(compilation, callback) {
            // compliation.chunks 存放所有代码块，是一个数组
            compilation.chunk.forEach(chunk => {
                // chunk代表一个代码块
                // 代码块有多个模块组成，通过chunk.forEachModule能读取代码块的每个模块
                chunk.forEachModule(function (module) {
                    // module代表一个模块
                    // module.fileDependencies存放当前模块的所有依赖的文件路径，是一个数组
                    module.fileDependencies.forEach(function (filepath) {
                        //依赖文件的路径
                    })
                });
                // webapck会根据俄chunk生成输出的文件资源，每个chunk都会对应一个及以上的输出文件
                // 例如在chunk中包含css模块并且使用了ExtractTextPlugin时候，
                // 该chunk就会生成.js和.css两个文件
                chunk.files.forEach(function(filename) {
                    // compilation.assets存放当前即将输出的所有资源
                    // 调用一个输出资源的source()方法能获取输出资源的内容
                    let source = compilation.assets[filename].source()
                })
            });
            
            // 这是一个异步事件，要记得调用callback来通知webpack本次事件监听处理结束
            // 如果忘记调用，就会一直卡在这里
            callback();
        })
    }
}

module.exports = readPlugin;