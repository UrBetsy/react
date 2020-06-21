module.exports = function (source) {
    // 在exports.raw === true时候， webpack传给loader的source是buffer类型
    source instanceof Buffer === true;
    // loader返回类型也可以是buffer类型的
    // exports.raw == true时候，loader也可以返回buffer类型的结果
    return source;
}
module.exports.raw = true;