 // Remove everything after the open bracket

 const removeBrackets = (input) => {
     const removeIndex = input.search(/\(|（|-/g)

     return input.slice(0, removeIndex > -1 ? removeIndex : input.length).trim()
 }
 
 module.exports = removeBrackets