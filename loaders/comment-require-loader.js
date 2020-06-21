// 该loader的作用是将js代码中的注释语法
// // @require '../style/index.css'
// 转换成
// require('../style/index.css');

module.exports = function (source) {
    console.log('这里是comment-require-loader')
    return source.replace(/(\/\/ *@require) + ('|").+('|").*/, 'require($2);');
}