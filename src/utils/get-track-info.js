const spotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new spotifyWebApi({
    clientId: '4b0727b570a44d218871528301c9504f',
    clientSecret: '877ef23bd4ab4ff78253108b5763ff39',
});

const getTrackInfo = (accessToken, spotifyUri, callback) => {

    spotifyApi.setAccessToken(accessToken)

    trackId = spotifyUri.replace('spotify:track:','') 

    spotifyApi.getTrack(trackId).then(function(data) {
        processedTrackData.title = data.body.name
        processedTrackData.artist = data.body.artists[0].name
        processedTrackData.artistId = data.body.artists[0].id

        callback(processedTrackData)
      })
}


  module.exports = getTrackInfo