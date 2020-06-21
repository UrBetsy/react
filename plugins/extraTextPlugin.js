// 可能需要根据当前配置是否使用了其他插件来做下一步决定，因此需要读取webpack当前的插件情况进行配置

// 判断当前配置是否使用了ExtraTextPlugin
// comipler参数为webpack在apply(compiler)中传入的参数
function hasExtraTextPlugin(compiler) {
    // 当前配置所用的所有插件列表
    const plugins = compiler.options.plugins;
    // 去plugins中寻找有没有ExtraTextPlugin的实例，
    return plugins.find(plugin => plugin.__proto__.constructor === ExtraTextPlugin) !== null;
}

class listenPlugin{
    
    apply(compiler) {
        let has = hasExtraTextPlugin(compiler)
        compiler.plugin('after-complier', function(compilation, callback) {
            // 将html文件添加到文件依赖列表中，好让webpack监听html模板文件，在html模板文件发生变化的时候，重新启动一次编译
            let filePath = '' //假装是模板文件路径
            compilation.fileDependencies.push(filePath)
            callback();
        })
    }
}
module.exports = listenPlugin;