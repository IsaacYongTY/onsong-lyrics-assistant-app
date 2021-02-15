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

        let { key, mode, tempo, time_signature, uri, duration_ms } = data.body
        let { artists, name, album} = trackInfo.body

        const processedTrackData = {
            key: assignPitchClass(key, mode),
            tempo: convertTempo(tempo, time_signature),
            uri: uri,
            duration: convertDurationToMinSec(duration_ms),
            time: convertTime(time_signature),
            rawData: {audioFeature: data.body, trackInfo: trackInfo.body},
            title: name,
            artist: artists[0].name,
            artistId: artists[0].id,
            verified: false,
            yearReleased: album.release_date.slice(0,4)
        };

        const isChinese = containsChinese(processedTrackData.title)

        if (isChinese) {
            processedTrackData.romTitle = getRomTitle(processedTrackData.title)
            processedTrackData.language = 'mandarin'
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
