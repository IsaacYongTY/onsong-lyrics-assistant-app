const assignPitchClass = require('./assign-pitch-class')
const convertDurationToMinSec = require('./convert-duration-to-min-sec')
const convertTempo = require('./convert-tempo')
const convertTime = require('./convert-time')

const containsChinese = require('contains-chinese')
const getFirstAlphabet = require('./get-first-alphabet')
const getRomTitle = require('./get-rom-title')


const spotifyWebApi = require('spotify-web-api-node')

const spotifyApi = new spotifyWebApi({
    
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
})

const getAudioFeatures = async(trackId) => {

    const code = await spotifyApi.clientCredentialsGrant()

    try {
        await spotifyApi.setAccessToken(code.body.access_token)

        let data = await spotifyApi.getAudioFeaturesForTrack(trackId)
        const trackInfo = await spotifyApi.getTrack(trackId)

        const processedTrackData = {
            key: assignPitchClass(data.body.key,data.body.mode),
            tempo: convertTempo(data.body.tempo, data.body.time_signature),
            uri: data.body.uri,
            duration: convertDurationToMinSec(data.body.duration_ms),
            time: convertTime(data.body.time_signature),
            rawData: {audioFeature: data.body, trackInfo: trackInfo.body},
            title: trackInfo.body.name,
            artist: trackInfo.body.artists[0].name,
            artistId: trackInfo.body.artists[0].id,
            verified: false,
        };


        const isChinese = containsChinese(processedTrackData.title)

        if (isChinese) {
            processedTrackData.romTitle = getRomTitle(processedTrackData.title)
            processedTrackData.language = 'chinese'
            processedTrackData.firstAlphabet = getFirstAlphabet(processedTrackData.romTitle)
        } else {
            processedTrackData.language = 'english'
            processedTrackData.firstAlphabet = getFirstAlphabet(processedTrackData.title)
        }

        return processedTrackData

        } catch (e) {
            return e
        }
    }
    


module.exports = getAudioFeatures
