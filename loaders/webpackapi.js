const loaderUtls = require('loader-utils')

module.exports = function (source) {
    // 获取用户为当前loader传入的options
    const options = loaderUtils.getOptions(this);
    return source
}