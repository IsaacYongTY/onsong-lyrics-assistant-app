const containsChinese = require('contains-chinese')

const title = '情非得已'

console.log(title)
const isChinese = containsChinese(title)

console.log(isChinese)