const convertDurationToMinSec = function (spotifyDuration) {

    let timeInSec = Math.round(spotifyDuration/1000)
    let min = Math.floor(timeInSec/60)
    let sec = Math.round(timeInSec - min * 60)

    return `${min}:${sec < 10 ? sec + '0' : sec}`
}

  module.exports = convertDurationToMinSec