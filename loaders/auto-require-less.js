const path = require('path')
const fs = require('fs')

module.exports = function(source) {
   if (this.cacheable) {
       this.cacheable();
   } 
   const resourcePath = path.parse(this.resourcePath);
   const { name } = resourcePath
   if (fs.existsSync(path.join(resourcePath.dir, `${name}.less`))) {
       return `${source}; require('./${name}.less')`;
   }
   return source;
}