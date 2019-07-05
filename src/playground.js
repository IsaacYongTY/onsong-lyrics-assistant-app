const chineseToPinyin = require('chinese-to-pinyin')

const title = '靠近'
const artist = '李圣杰'



const romTitle = chineseToPinyin(title, {noTone: true})
const romArtist = chineseToPinyin(artist, {noTone: true})



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



console.log(capitalizeString(romTitle))
console.log(capitalizeString(romArtist))



