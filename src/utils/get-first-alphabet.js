
const removeBrackets = require('./remove-brackets')

const getFirstAlphabet = (input) => {
   
    input = removeBrackets(input)
    
    splittedTitle = input.split(' ') // using split returns an array

    let resultString = ''

    for(index=0; index < splittedTitle.length; index++) {
        eachString = splittedTitle[index].toLowerCase()
        resultString += eachString[0] //get first alphabet and add to string
    }
    
    return resultString
}

module.exports = getFirstAlphabet