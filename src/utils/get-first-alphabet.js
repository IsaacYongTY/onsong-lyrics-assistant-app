
const removeBrackets = require('./remove-brackets')

const getFirstAlphabet = (input) => removeBrackets(input).split(' ').reduce((acc, word) => acc + word[0].toLowerCase(), '')

module.exports = getFirstAlphabet