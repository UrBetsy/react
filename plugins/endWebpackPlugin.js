// 作用是即将退出时候附加一些额外操作，例如在webpack成功编译和出书文件后执行发布操作，将输出的文件上传到服务器，同时改插件还能区分webpack构建是否成功
class endWebpackPlugin {
    constructor(doneCallback, failCallback) {
        // 保存在构造函数中传入的回调函数
        this.doneCallback = doneCallback;
        this.failCallback = failCallback;
    }
    apply(compiler) {
        compiler.plugin('done', stats => {
            // done事件回调doneCallback
            this.doneCallback(stats)
        });
        compiler.plugin('failed', err => {
            // fail时间中回调failCallback
            this.failCallback(err)
        })
    }
}

module.exports = endWebpackPlugin;