// 开发插件时候，常常需要知道那个文件发生变化导致了compilation

class listenPlugin{
    
    apply(compiler) {
        compiler.plugin('after-complier', function(compilation, callback) {
            // 将html文件添加到文件依赖列表中，好让webpack监听html模板文件，在html模板文件发生变化的时候，重新启动一次编译
            let filePath = '' //假装是模板文件路径
            compilation.fileDependencies.push(filePath)
            callback();
        })
    }
}
module.exports = listenPlugin;