module.exports = function(source) {
    // 通过this.callback 告诉webpack返回的结果
    // this.callback是wepack向loader注入的api，以方便loader和webpack中间通信
    this.callback(null, source, sourceMaps);
    // 当我们使用this.callback 返回内容时候，改loader必须返回undefiend
    // 以让webpack知道该loader返回的结果在this.callback中，而不是return中
    return;
}


// this.callback的详细使用方法：
// this.callback(
//     // 当无法转换内容是，webpack返回一个error
//     err: Error || null,
//     // 原内容转换之后的内容，
//     content: string || Buffer,
//     // 用于通过转换后的内容得出原内容的sourcemap，方便调试
//     sourceMap?:SourceMap,
//     // 如果本次转换为原内容生成了AST语法树，可以将这个AST返回，
//     // 以方便之后需要AST的loader复用该AST，避免重复生成AST，提升性能
//     abstractAyntaxTree?: AST
// )
