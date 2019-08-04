const assignPitchClass = function (spotifyKey, spotifyMode) {
    let key = ''
    
    if (spotifyKey === 0) {
        key = 'C'
    }   else if (spotifyKey === 1) {
        key = 'Db'
    }   else if (spotifyKey === 2) {
        key = 'D'
    }   else if (spotifyKey === 3) {
        key = 'Eb'
    }   else if (spotifyKey === 4) {
        key = 'E'
    }   else if (spotifyKey === 5) {
        key = 'F'
    }   else if (spotifyKey === 6) {
        key = 'Gb'
    }   else if (spotifyKey === 7) {
        key = 'G'
    }   else if (spotifyKey === 8) {
        key = 'Ab'
    }   else if (spotifyKey === 9) {
        key = 'A'
    }   else if (spotifyKey === 10) {
        key = 'Bb'
    }   else if (spotifyKey === 11) {
        key = 'B'
    } else {
        console.log('error1')
    }
  
    // Check for minor key
    if  (spotifyMode === 0) {
        key += 'm'
  
        if (key === 'Dbm') {
            key = 'C#m'
        }   else if (key === 'Gbm') {
            key = 'F#m'
        }   else if (key === 'Abm') {
            key = 'G#m'
        }   
    }
  
    return key
  
  }

  module.exports = assignPitchClass