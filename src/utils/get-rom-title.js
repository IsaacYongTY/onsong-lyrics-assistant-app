const chineseToPinyin = require('chinese-to-pinyin')
const removeBrackets = require('./remove-brackets')

const capitalizeString = (romTitle) => romTitle.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ')

const getRomTitle = (title) => {
    title = removeBrackets(title)
    let romTitle = chineseToPinyin(title, {noTone: true})
    return capitalizeString(romTitle).replace(/,/g, ' ')

}

module.exports = getRomTitle