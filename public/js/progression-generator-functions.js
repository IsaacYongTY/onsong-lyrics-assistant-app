const renderSpacing = (spacing, chordLength) => spaceChar.repeat(spacing - (chordLength - 1))

const keyMap = [
    {
        key: 'C',
        degree: 0,
        isSharp: true
    },
    {
        key: 'G',
        degree: 1,
        isSharp: true
    },
    {
        key: 'D',
        degree: 2,
        isSharp: true
    },
    {
        key: 'A',
        degree: 3,
        isSharp: true
    },
    {
        key: 'E',
        degree: 4,
        isSharp: true
    },{
        key: 'B',
        degree: 5,
        isSharp: true
    },
    {
        key: 'F#',
        degree: 6,
        isSharp: true
    },

    {
        key: 'F',
        degree: 1,
        isSharp: false
    },
    {
        key: 'Bb',
        degree: 2,
        isSharp: false
    },
    {
        key: 'Eb',
        degree: 3,
        isSharp: false
    },
    {
        key: 'Ab',
        degree: 4,
        isSharp: false
    },
    {
        key: 'Db',
        degree: 5,
        isSharp: false
    },
    {
        key: 'Gb',
        degree: 6,
        isSharp: false
    },
]

const createChordsInKey = (inputKey) => {

    const resultKey = keyMap.find((key) => key.key === inputKey)

    let { key, degree, isSharp } = resultKey

    const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
    const keyIndex = notes.indexOf(key[0])

    let reshuffledNotes = notes.slice(keyIndex).concat(notes.slice(0,keyIndex))

    let accidental = isSharp? '#' : 'b'

    let noteIndex = isSharp ? 6 : 3

    // 6 -> 2 -> 5 -> 1
    let i = 0
    while(i < degree) {

        reshuffledNotes[noteIndex] += accidental

        if(isSharp) {
            noteIndex += 3

            if (noteIndex > 6) {
                noteIndex -= notes.length
            }

        }  else {
            noteIndex -= 3
            if (noteIndex < 0) {
                noteIndex += notes.length
            }
        }
        i++
    }
    return reshuffledNotes
}

 const assignChordsToProg = function (notesInKeyArray,progression) {

     let progressionArray = progression.match(/(b[1-7])|([1-7]m)|([1-7]M)|\d/g)

     return progressionArray.map((chordNum) => {
         let result = ''
         // If explicitly specified
         if (chordNum.length > 1) {

             if (chordNum[0] === 'b') {
                 result = notesInKeyArray[chordNum[1] - 1] + 'b'
             }

             if (chordNum[1] === 'm') {
                 result = notesInKeyArray[chordNum[0] - 1] + 'm'
             }

             if (chordNum[1] === 'M') {
                 result = notesInKeyArray[chordNum[0] - 1].replace(/m/, '')
             }

         } else {
             //default family chords
             if (chordNum[0] == 3 || chordNum[0] == 6) {
                 result = notesInKeyArray[chordNum - 1] + 'm'
             } else if (chordNum[0] == 2) {
                 result = notesInKeyArray[chordNum - 1] + 'm7'
             } else if (chordNum[0] == 7) {
                 result = notesInKeyArray[chordNum - 1] + 'dim7'
             } else {
                 result = notesInKeyArray[chordNum[0] - 1]
             }
         }

         return result

     })

 }

 const fullBarProg = function (chords, space) {
    let resultString = ''
 

 
    // Generate string
    for(index = 0; index !== chords.length; index++) {
        resultString = resultString + `|\xa0`

        resultString += `[${chords[index]}]` + renderSpacing(space, chords[index].length)

       if((index + 1) % 4 === 0 && index < chords.length) {
       resultString += `|\n` // Close and go to next line
       }
    }

    // For ending
    if (chords.length > 0 && chords.length % 4 !== 0) {
       resultString += `|\n\n`
    }  else {
       resultString += `\n`
    }
     
    chords = {}
    return resultString
 }

 const halfBarProg = function (chords, space) {
    halfSpace = Math.ceil((space/2))
    let resultString = ''

    // Generate string
    for(let index = 0; index !== chords.length; index++) {
    
    // Extra 'if' code for half bar program
       if ((index + 1) % 2 !== 0) {
          resultString = resultString + '|\xa0'
       }
    // 

       if (chords[index].length === 1) {    

            resultString += `[${chords[index]}]` + renderSpacing(halfSpace, 0)

         }  else {
                resultString += `[${chords[index]}]` + renderSpacing(halfSpace, chords[index].length - 1) 
         }
       
       if((index + 1) % 4 === 0 && index < chords.length) {
            resultString += `|\n` // Ending bar line every 4 chords
        }   
    }
    
    // For ending
    if (chords.length > 0) {
       
        if (chords.length % 2 !== 0) {
            resultString += `${renderSpacing(halfSpace + 3 ,0)}|\n\n`
            // Note: in [Xyyy] halfBarSpace,  included __yyy_KK, y + K = halfBarSpace, empty space = constant = 3
            // For position 2,4,6...
        }   else if ((chords.length + 1) % 2 !== 0 && chords.length % 4 !== 0) {
                resultString += `|\n\n`
                
                // Note: in [Xyyy] halfBarSpace,  included __yyy_KK, y + K = halfBarSpace, empty space = constant = 3
                // For position 1,5,9...
        }  else {
            resultString += `\n`
        }
    }  
    chords = {}
    return resultString
 }

