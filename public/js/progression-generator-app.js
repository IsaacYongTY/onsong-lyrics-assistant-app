// For debugging
      // Change spaceChar to 'K' for better visibility of space
      let spaceChar = '\xa0'
           // spaceChar = 'K'
         
// Initialization
let isHalfBar = false

let standardFullBarSpace = 12
let standardHalfBarSpace = 14

let spacing = document.querySelector('#spacing')
let outputTextArea = document.querySelector('#output-text-area')
let progressionText = document.querySelector('#prog-text')
let clearButton = document.querySelector('#clear')
let copyButton = document.querySelector('#copy')
let progChoice1 = document.querySelector('#prog-choice-1')
let progChoice2 = document.querySelector('#prog-choice-2')
let commonProgressionList = document.querySelector('#common-progression-list')

spacing.value = standardFullBarSpace

progChoice1.addEventListener('click', () => {
   isHalfBar = false
   spacing.value = standardFullBarSpace
})

progChoice2.addEventListener('click', () => {
   isHalfBar = true
   spacing.value = standardHalfBarSpace
})

commonProgressionList.addEventListener('change', (e) => {
   progressionText.value = e.target.value
})

progressionText.addEventListener('input',  () => {
   commonProgressionList.value = ''
})

document.querySelector('#prog-form').addEventListener('submit', (e) => {

   e.preventDefault()

   let result
   let inputProgression = e.target.elements.inputProgression.value
   let spacing = e.target.elements.inputSpacing.value
   let key = createChordsInKey(e.target.elements.inputKey.value)
   let chordsProgressionArray = assignChordsToProg(key,inputProgression)

   result = isHalfBar ? halfBarProg(chordsProgressionArray, spacing) : fullBarProg(chordsProgressionArray, spacing)

   outputTextArea.value += result
})

clearButton.addEventListener('click', () => {
   outputTextArea.value = ''
})

copyButton.addEventListener('click', () => {
   outputTextArea.select()
   document.execCommand('copy')
   outputTextArea.blur()
})



