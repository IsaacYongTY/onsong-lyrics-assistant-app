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

const convertTime = function (spotifyTime) {
  return `${spotifyTime}/4`
}

const convertTempo = function (spotifyTempo) {
  return `${Math.round(spotifyTempo)}`
}


const spotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new spotifyWebApi({
    clientId: '4b0727b570a44d218871528301c9504f',
    clientSecret: '877ef23bd4ab4ff78253108b5763ff39',
});


const getAudioFeatures = (accessToken, spotifyUri, callback) => {
    spotifyApi.setAccessToken(accessToken)

  
  
    trackId = spotifyUri.replace('spotify:track:','') 

    
    spotifyApi.getAudioFeaturesForTrack(trackId).then(function(data) {
      
        processedTrackData = {
          key: assignPitchClass(data.body.key,data.body.mode),
          tempo: convertTempo(data.body.tempo),
          id: data.body.id,
          duration: convertDurationToMinSec(data.body.duration_ms),
          time: convertTime(data.body.time_signature),
        };
    
    
    
    
    callback(processedTrackData)

    
  }, function(err) {
    console.log(err);
  });
}

module.exports = getAudioFeatures