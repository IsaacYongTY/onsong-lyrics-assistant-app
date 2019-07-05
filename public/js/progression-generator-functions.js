const renderSpacing = function(spacing, chordLength) {
    let resultSpacing = ''
    
    for(spaceIndex = 0 ; spaceIndex < spacing - chordLength ; spaceIndex++) {
        resultSpacing = resultSpacing + spaceChar 
    }
       return resultSpacing
 }
 
 const removeSuffix = function (getProgression) {
 
    let newString = ''
    let regex1 = ''
    let regex2 = ''
    let regex3 = ''
 
    if (getProgression.includes('b')) {
       regex1 = /b/g
    }
    if (getProgression.includes('m')) {
       regex2 = /m/g
    }
    if (getProgression.includes('M')) {
       regex3 = /M/g
    }
 
    newString = getProgression.replace(regex1,'') // remove Flat in progression if any
    newString = newString.replace(regex2,'') // remove Minor in progression if any
    newString = newString.replace(regex3,'') // remove Major in progression if any
 
    return newString
 }
 
 const keyLibrary = function (getKey) {
   
    if (getKey === 'C') {
       key.tonic = 'C'
       key.supertonic = 'Dm7'
       key.supertonicPar = 'D'
       key.mediant = 'Em'
       key.subdominant = 'F'
       key.dominant = 'G'
       key.submediant = 'Am'
       key.leadingTone = 'Bm7b5'
       key.subtonic = 'Bb'
       key.supertonicPar = 'D'
       key.mediantPar = 'E'
       key.subdominantPar = 'Fm'
       key.dominantPar = 'Gm'
       key.submediantPar = 'A'
       key.b6 = 'Ab'
    }
 
    if (getKey === 'Db') {
       key.tonic = 'Db'
       key.supertonic = 'Ebm7'
       key.mediant = 'Fm'
       key.subdominant = 'Gb'
       key.dominant = 'Ab'
       key.submediant = 'Bbm'
       key.leadingTone = 'Cm7b5'
       key.subtonic = 'Cb'
       key.supertonicPar = 'Eb'
       key.mediantPar = 'F'
       key.subdominantPar = 'Gbm'
       key.dominantPar = 'Abm'
       key.submediantPar = 'Bb'
       key.b6 = 'A'
    }
 
    if (getKey === 'D') {
       key.tonic = 'D'
       key.supertonic = 'Em7'
       key.mediant = 'F#m'
       key.subdominant = 'G'
       key.dominant = 'A'
       key.submediant = 'Bm'
       key.leadingTone = 'C#m7b5'
       key.subtonic = 'C'
       key.supertonicPar ='E'
       key.mediantPar = 'F#'
       key.subdominantPar = 'Gm'
       key.dominantPar = 'Am'
       key.submediantPar = 'B'
       key.b6 = 'Bb'
    }
 
    if (getKey === 'Eb') {
       key.tonic = 'Eb'
       key.supertonic = 'Fm7'
       key.mediant = 'Gm'
       key.subdominant = 'Ab'
       key.dominant = 'Bb'
       key.submediant = 'Cm'
       key.leadingTone = 'Dm7b5'
       key.subtonic = 'Db'
       key.supertonicPar = 'F'
       key.mediantPar = 'G'
       key.subdominantPar = 'Abm'
       key.dominantPar = 'Bbm'
       key.submediantPar = 'C'
       key.b6 = 'B'
    }
 
    if (getKey === 'E') {
       key.tonic = 'E'
       key.supertonic = 'F#m7'
       key.mediant = 'G#m'
       key.subdominant = 'A'
       key.dominant = 'B'
       key.submediant = 'C#m'
       key.leadingTone = 'D#m7b5'
       key.subtonic = 'D'
       key.supertonicPar = 'F#'
       key.mediantPar = 'G#'
       key.subdominantPar = 'Am'
       key.dominantPar = 'Bm'
       key.submediantPar = 'C#'
       key.b6 = 'C'
    }
 
    if (getKey === 'F') {
       key.tonic = 'F'
       key.supertonic = 'Gm7'
       key.mediant = 'Am'
       key.subdominant = 'Bb'
       key.dominant = 'C'
       key.submediant = 'Dm'
       key.leadingTone = 'Em7b5'
       key.subtonic = 'Eb'
       key.supertonicPar = 'G'
       key.mediantPar = 'A'
       key.subdominantPar = 'Bbm'
       key.dominantPar = 'Cm'
       key.submediantPar = 'D'
       key.b6 = 'Db'
    }
 
    if (getKey === 'Gb') {
       key.tonic = 'Gb'
       key.supertonic = 'Abm7'
       key.mediant = 'Bbm'
       key.subdominant = 'Cb'
       key.dominant = 'Db'
       key.submediant = 'Ebm'
       key.leadingTone = 'Fm7b5'
       key.subtonic = 'Fb'
       key.supertonicPar = 'Ab'
       key.mediantPar = 'Bb'
       key.subdominantPar = 'Cbm'
       key.dominantPar = 'Dbm'
       key.submediantPar = 'Eb'
       key.b6 = 'D'
    }
    if (getKey === 'G') {
       key.tonic = 'G'
       key.supertonic = 'Am7'
       key.mediant = 'Bm'
       key.subdominant = 'C'
       key.dominant = 'D'
       key.submediant = 'Em'
       key.leadingTone = 'F#m7b5'
       key.subtonic = 'F'
       key.supertonicPar = 'A'
       key.mediantPar = 'B'
       key.subdominantPar = 'Cm'
       key.dominantPar = 'Dm'
       key.submediantPar = 'E'
       key.b6 = 'Eb'
    }
 
    if (getKey === 'Ab') {
       key.tonic = 'Ab'
       key.supertonic = 'Bbm7'
       key.mediant = 'Cm'
       key.subdominant = 'Db'
       key.dominant = 'Eb'
       key.submediant = 'Fm'
       key.leadingTone = 'Gm7b5'
       key.subtonic = 'Gb'
       key.supertonicPar = 'Bb'
       key.mediantPar = 'C'
       key.subdominantPar = 'Dbm'
       key.dominantPar = 'Ebm'
       key.submediantPar = 'F'
       key.b6 = 'Fb'
    }
 
    if (getKey === 'A') {
       key.tonic = 'A'
       key.supertonic = 'Bm7'
       key.mediant = 'C#m'
       key.subdominant = 'D'
       key.dominant = 'E'
       key.submediant = 'F#m'
       key.leadingTone = 'G#m7b5'
       key.subtonic = 'G'
       key.supertonicPar = 'B'
       key.mediantPar = 'C#'
       key.subdominantPar = 'Dm'
       key.dominantPar = 'Em'
       key.submediantPar = 'F#'
       key.b6 = 'F'
    }
 
    if (getKey === 'Bb') {
       key.tonic = 'Bb'
       key.supertonic = 'Cm7'
       key.mediant = 'Dm'
       key.subdominant = 'Eb'
       key.dominant = 'F'
       key.submediant = 'Gm'
       key.leadingTone = 'Am7b5'
       key.subtonic = 'Ab'
       key.supertonicPar = 'C'
       key.mediantPar = 'D'
       key.subdominantPar = 'Ebm'
       key.dominantPar = 'Fm'
       key.submediantPar = 'G'
       key.b6 = 'Gb'
    }
 
    if (getKey === 'B') {
       key.tonic = 'B'
       key.supertonic = 'C#m7'
       key.mediant = 'D#m'
       key.subdominant = 'E'
       key.dominant = 'F#'
       key.submediant = 'G#m'
       key.leadingTone = 'A#m7b5'
       key.subtonic = 'A'
       key.supertonicPar = 'C#'
       key.mediantPar = 'D#'
       key.subdominantPar = 'Em'
       key.dominantPar = 'F#m'
       key.submediantPar = 'G#'
       key.b6 = 'G'
    }
 
    if (getKey === 'C#') {
       key.tonic = 'C#'
       key.supertonic = 'D#m7'
       key.mediant = 'E#m'
       key.subdominant = 'F#'
       key.dominant = 'G#'
       key.submediant = 'A#m'
       key.leadingTone = 'B#m7b5'
       key.subtonic = 'B'
       key.supertonicPar = 'D#'
       key.mediantPar = 'E#'
       key.subdominantPar = 'F#m'
       key.dominantPar = 'G#m'
       key.submediantPar = 'A#'
       key.b6 = 'A'
    }
 
    if (getKey === 'F#') {
       key.tonic = 'F#'
       key.supertonic = 'G#m7'
       key.mediant = 'A#m'
       key.subdominant = 'B'
       key.dominant = 'C#'
       key.submediant = 'D#m'
       key.leadingTone = 'E#m7b5'
       key.subtonic = 'E'
       key.supertonicPar = 'G#'
       key.mediantPar = 'A#'
       key.subdominantPar = 'Bm'
       key.dominantPar = 'C#m'
       key.submediantPar = 'D#'
       key.b6 = 'D'
    }
 }
 
 const assignChordsToProg = function (getProgression) {
    // Assign actual chords to progression
  
    for (index=0; index !==  getProgression.length; index++) {
       
        if  (getProgression[index] == '1') {
            chords[index] =  key.tonic
        }   else if  (getProgression[index] == '2') {
                if (getProgression[index + 1] === 'M') {
                    getProgression = getProgression.replace('M', '')
                    chords[index] =  key.supertonicPar
                }   else {
                    chords[index] =  key.supertonic
                }
            }
            else if  (getProgression[index] == '3') {
                if (getProgression[index + 1] === 'M') {
                    getProgression = getProgression.replace('M', '')
                    chords[index] =  key.mediantPar
                }   else {
                    chords[index] =  key.mediant
                }
            }
            else if  (getProgression[index] == '4') {
              if (getProgression[index + 1] === 'm') {
                    getProgression = getProgression.replace('m', '')
                    chords[index] =  key.subdominantPar
                } else {
                    chords[index] =  key.subdominant
                }
            }
            else if  (getProgression[index] == '5') {
              if (getProgression[index + 1] === 'm') {
                 getProgression = getProgression.replace('m', '')
                 chords[index] =  key.dominantPar
                } else {
                 chords[index] =  key.dominant
                }
              
            }
            else if  (getProgression[index] == '6') {
              if (getProgression[index + 1] === 'M') {
                 getProgression = getProgression.replace('M', '')
                 chords[index] =  key.submediantPar
                } else {
                    chords[index] =  key.submediant
                }
            }
            else if  (getProgression[index] == '7') {
                chords[index] =  key.leadingTone
            }
           // Can handle Flat now
            else if  (getProgression[index] === 'b' && getProgression[index + 1] === '7') {
  
              getProgression = getProgression.replace('b', '')
     
              chords[index] =  key.subtonic
            }
            else if  (getProgression[index] === 'b' && getProgression[index + 1] === '6') {
  
              getProgression = getProgression.replace('b', '')
     
              chords[index] =  key.b6
            }
        }
    return chords
 }

 const fullBarProg = function (getSection,chords, getSpace, progressionNumOnly) {
    let resultString = ''
 
    if (getSection !== '') {
       resultString = `${getSection}:\n`
    } 
 
    // Generate string
    for(index = 0; index !== progressionNumOnly.length; index++) {
       resultString = resultString + `|\xa0`

       if (chords[index].length === 1) {    
            resultString += `[${chords[index]}]` + renderSpacing(getSpace, 0)               
         }  else {
          resultString += `[${chords[index]}]` + renderSpacing(getSpace, chords[index].length - 1) 
       } 
       if((index + 1) % 4 === 0 && index < progressionNumOnly.length) {
       resultString += `|\n` // Close and go to next line
       }
    }

    // For ending
    if (progressionNumOnly.length > 0 && progressionNumOnly.length % 4 !== 0) {
       resultString += `|\n\n`
    }  else {
       resultString += `\n`
    }
     
    chords = {}
    return resultString
 }

 const halfBarProg = function (getSection,chords, getSpace, progressionNumOnly) {
    halfSpace = Math.ceil((getSpace/2))
    let resultString = ''

    if (getSection !== '') {
       resultString = `${getSection}:\n`
    } 

    // Generate string
    for(let index = 0; index !== progressionNumOnly.length; index++) {
    
    // Extra 'if' code for half bar program
       if ((index + 1) % 2 !== 0) {
          resultString = resultString + '|\xa0'
       }
    // 

       if (chords[index].length === 1) {    

            resultString = resultString + `[${chords[index]}]` + renderSpacing(halfSpace, 0)    

         }  else {
                resultString += `[${chords[index]}]` + renderSpacing(halfSpace, chords[index].length - 1) 
         }
       
       if((index + 1) % 4 === 0 && index < progressionNumOnly.length) {
            resultString += `|\n` // Ending bar line every 4 chords
        }   
    }
    
    // For ending
    if (progressionNumOnly.length > 0) {
       
        if (progressionNumOnly.length % 2 !== 0) {
            resultString += `${renderSpacing(halfSpace + 3 ,0)}|\n\n`
            // Note: in [Xyyy] halfBarSpace,  included __yyy_KK, y + K = halfBarSpace, empty space = constant = 3
            // For position 2,4,6...
        }   else if ((progressionNumOnly.length + 1) % 2 !== 0 && progressionNumOnly.length % 4 !== 0) {
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

