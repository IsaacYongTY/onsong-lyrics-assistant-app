const chineseToPinyin = require('chinese-to-pinyin')

const capitalizeString = (textString) => {

    let result = textString[0].toUpperCase()

    for(index=1; index<textString.length; index++) {
        if (textString[index - 1] === ' ') {
            result += textString[index].toUpperCase()
        }   else {
            result += textString[index]
        }
    }
    result = result.split(' ')
    return result
}

const getRomTitle = (title) => {
    let romTitle = chineseToPinyin(title, {noTone: true})
    romTitle = capitalizeString(romTitle)
    return romTitle

}

module.exports = getRomTitle