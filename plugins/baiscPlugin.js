
// 这是一个最基础的plugin代码
class BasicPlugin{
    // 在构造函数中获取用户为该插件传入的配置参数
    constructor(options) {

    }
    // webapck会调用BasicPlugin实例的apply方法为插件实例传入compiler对象
    apply(compiler) {
        compiler.plugin('compilation', function(compilation, callback) {
            // 支持处理逻辑
            // 处理完毕完毕之后callback以通知 webpack
            // 如果不执行 callback，运行流程将会一直卡在这里不往后执行
            callback();
        })
    }
}
// webapck启动后，在读取配置的过程中会先执行new BasicPlugin()，初始化一个BasicPlugin并获取实例。
// 在初始化compiler对象后，调用basicPlugin.apply(compiler)为插件实例传入compiler对象。
// 插件实例在获取compiler对象后，就可以通过compiler.plugin(事件名称，回调函数),监听到webpack广播的时间，
// 就可以通过compiler对象去操作webpack

module.exports = BasicPlugin;