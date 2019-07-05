// For debugging
      // Change spaceChar to 'K' for better visibility of space
      let spaceChar = '\xa0'
           // spaceChar = 'K'
         
// Initialization
const key = {}
let chords = []
isHalfBar = false

let standardFullBarSpace = 14
let standardHalfBarSpace = 14

document.querySelector('#prog-choice-1').addEventListener('click', function(e) {
   isHalfBar = false
   document.querySelector('#spacing').value = standardFullBarSpace
})

document.querySelector('#prog-choice-2').addEventListener('click', function(e) {
   isHalfBar = true
   document.querySelector('#spacing').value = standardHalfBarSpace
})

document.querySelector('#prog-common-progression').addEventListener('change', function (e) {
   document.querySelector('#prog-text').value = e.target.value
})

document.querySelector('#prog-text').addEventListener('input', function (e) {
   document.querySelector('#prog-common-progression').value = ''
})

document.querySelector('#prog-form').addEventListener('submit', function (e) {
   
   e.preventDefault()

   let result = ''

   keyLibrary (e.target.elements.inputKey.value)
   
   if (isHalfBar === false) {
      result = fullBarProg(e.target.elements.inputSection.value, 
                                       assignChordsToProg(e.target.elements.inputProgression.value),
                                       e.target.elements.inputSpacing.value,
                                       removeSuffix(e.target.elements.inputProgression.value)
   )}  else {
      result = halfBarProg(e.target.elements.inputSection.value, 
                                       assignChordsToProg(e.target.elements.inputProgression.value),
                                       e.target.elements.inputSpacing.value,
                                       removeSuffix(e.target.elements.inputProgression.value)
   )}
   
   document.querySelector('#output-result').value += result
   document.querySelector('#prog-section').value = ''
})

document.querySelector('#clear').addEventListener('click', function (e) {
   document.querySelector('#output-result').value = ''
})

document.querySelector('#copy').addEventListener('click', function (e) {
   document.querySelector('#output-result').select()
   document.execCommand('copy')
   document.querySelector('#output-result').blur()
})



