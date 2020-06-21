module.exports = function(source) {
    // source为compiler传递给loader的一个文件的原内容
    // 该函数需要返回处理后的内容，这里简单起见，直接将原内容返回，相当于这个loader什么都没做
    return source
}