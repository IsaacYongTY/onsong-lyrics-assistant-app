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
  
    return `${min}:${sec}`
  }

  module.exports = convertDurationToMinSec