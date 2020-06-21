// 在某些场景，插件需要修改，增加，删除输出的资源，则需要监听emit时间，因为emit事件发生时候，所有模块的转换和代码块对应文件已经生成好了
// emit事件是修改webpack输出资源的最后机会

class changeOutputPlugin{
    constructor() {
        console.log('这里是changeoutput的构造函数')
    }
    
    apply(compiler) {
        console.log('这里是changeoutput的apply方法')
        compiler.plugin('emit', function(compilation, callback) {
            // 所有需要输出的资源都会放在compilation.assets中，compilation.assets是一个键值对
            // 键为需要输出的文件的名称，值为文件对应的内容
            // 设置名为fileName的输出资源


            let fileName = 'bundle.js'
            const asset1 = compilation.assets[fileName];
            console.log(asset1)

            let chageContent = `document.write("我变了!")`
            compilation.assets[fileName] = {
                // 返回文件内容
                source: () => {
                    // fileContent既可以代表文本文件的字符串，也可以是二进制文件的Buffer
                    return chageContent;
                },
                size: () => {
                    return Buffer.byteLength(chageContent, 'utf-8')
                }
            }
            const asset = compilation.assets[fileName];
            let source = asset.source();
            let size = asset.size();
            console.log(asset)
            console.log(source)
            console.log(size)
            callback();
        })
    }
}
module.exports = changeOutputPlugin;