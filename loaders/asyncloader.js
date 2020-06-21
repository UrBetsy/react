// 异步转换的loader
module.exports = function (source) {
    // 告诉webpack本次转换是异步的，loader会在callback中回调结果
    var callback = this.async();
    someAsyncOperation(source, function(err, result, sourceMap, ast) {
        // 通过callback返回异步执行的结果
        callback(err, result, sourcemap, ast)
    })
}