 // Remove everything after the open bracket

 const removeBrackets = (input) => {
    if (input.includes('(')) {
        removeIndex = input.indexOf('(')
        input = input.slice(0, removeIndex).trim()
    }

    if (input.includes('（')) {
        removeIndex = input.indexOf('(')
        input = input.slice(0, removeIndex).trim()
    }

    // Mostly found in Chinese song title, for commentary
    if (input.includes('-')) {
        removeIndex = input.indexOf('-')
        input = input.slice(0, removeIndex).trim()
    }

    return input
 }
 
 module.exports = removeBrackets