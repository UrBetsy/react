module.exports = function(source) {
    // webpack 默认开启缓存
    // 关闭改loader的缓存功能
    this.cacheable(false)
    return source
}