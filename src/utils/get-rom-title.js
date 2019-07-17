const chineseToPinyin = require('chinese-to-pinyin')
const removeBrackets = require('./remove-brackets')

const capitalizeString = (textString) => {

    let result = textString[0].toUpperCase()

    for(index=1; index<textString.length; index++) {
        if (textString[index - 1] === ' ') {
            result += textString[index].toUpperCase()
        }   else {
            result += textString[index]
        }
    }
    return result.split(' ')
}

const getRomTitle = (title) => {

    title = removeBrackets(title)
    

    let romTitle = chineseToPinyin(title, {noTone: true})
    romTitle = capitalizeString(romTitle).toString()

    regex = /,/gi

    return romTitle = romTitle.replace(regex, ' ')


}

module.exports = getRomTitle