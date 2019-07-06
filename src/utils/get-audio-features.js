const assignPitchClass = require('./assign-pitch-class')
const convertDurationToMinSec = require('./convert-duration-to-min-sec')
const convertTime = require('./convert-time')
const convertTempo = require('./convert-tempo')

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