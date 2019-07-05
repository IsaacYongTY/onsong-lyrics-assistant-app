const removeWatermark = function (song) {
    song.lyrics = song.lyrics.replace('更多更详尽歌词 在 ※ Mojim.com　魔镜歌词网 ', '')
}

const getFirstAlphabet = function (song) {
    
    if(song.romTitle.length === 0) {
        splittedTitle = song.title.split(' ') // using split returns an array
    }   else {
        splittedTitle = song.romTitle.split(' ') // using split returns an array
    }
    

    let resultString = ''

    for(index=0; index < splittedTitle.length; index++) {
        eachString = splittedTitle[index].toLowerCase()
        resultString += eachString[0] //get first alphabet and add to string
    }
    
    song.firstAlphabet = resultString

    
}

const convertDurationToMinSec = function (spotifyDuration) {
    let timeSec = spotifyDuration/1000/60
    let min = Math.floor(timeSec)
    let sec = Math.round((timeSec - min) * 60)

    if (sec === 60) {
        min += 1
        sec = 0
    }
    
    if (sec < 10) {
        sec = '0' + sec.toString()
    }   

    console.log(spotifyDuration)
    console.log(timeSec)
    return `${min}:${sec}`
}

const convertTime = function (spotifyTime) {
    return `${spotifyTime}/4`
}

const convertTempo = function (spotifyTempo) {
  return `${Math.round(spotifyTempo/2)}`
}

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

  createOnSongFile = function (song) {
    sanitizeGeniusLyrics(song)
    removeWatermark(song)
    getFirstAlphabet(song)
    fs.writeFileSync(`./output-folder/${song.title}.onsong`,`${metaTemplate(song)}O: ${song.key}\n\n${song.lyrics}`)
}

sanitizeGeniusLyrics = (song) => {
    regex1 = /\[/g     // remove [ ]
    regex2 = /\]/g
    song.lyrics = song.lyrics.replace(regex1, '')
    song.lyrics = song.lyrics.replace(regex2, ':')
}

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

  module.exports = {assignPitchClass, convertDurationToMinSec, convertTempo, convertTime, capitalizeString}
 