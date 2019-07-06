const fs = require('fs')
const path = require('path')
const hbs = require('hbs')

const myFunctions = require('./functions.js')
const chineseToPinyin = require('chinese-to-pinyin')

const express = require('express')
const app = express()
const port = process.env.PORT || 3000


const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.use(express.static(publicDirectoryPath))

// Configure express to use hbs
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.get('', (req, res) => {
  res.render('index', {
    title: 'Home',
    name: 'Isaac Yong'
  })
})
app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'Isaac Yong'
  })
})

app.get('/bpm', (req, res) => {
  res.render('bpm', {
    title: 'BPM Tool',
    name: 'Isaac Yong'
  })
})

app.get('/progression-generator', (req, res) => {
  res.render('progression-generator', {
    title: 'Progression Generator',
    name: 'Isaac Yong'
  })
})

app.get('/spotify-meta-tool', (req, res) => {
  res.render('spotify-meta-tool', {
    title: 'Spotify Meta Tool',
    name: 'Isaac Yong'
  })
})
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'Isaac Yong'
  })
})


const assignPitchClass = myFunctions.assignPitchClass
const convertDurationToMinSec = myFunctions.convertDurationToMinSec
const convertTime = myFunctions.convertTime
const convertTempo = myFunctions.convertTempo


const spotifyWebApi = require('spotify-web-api-node');


const spotifyApi = new spotifyWebApi({
    clientId: '4b0727b570a44d218871528301c9504f',
    clientSecret: '877ef23bd4ab4ff78253108b5763ff39',
});

let trackId = ''
let processedTrackData = {}
let artistId = ''

/* Get Audio Features for a Track */

const getAudioFeature = function () {
    rawTrackData = {}
    processedTrackData = {}
    trackId = spotifyUri.replace('spotify:track:','') 

    
    spotifyApi.getAudioFeaturesForTrack(trackId).then(function(data) {
      console.log(data)
        processedTrackData = {
        key: assignPitchClass(data.body.key,data.body.mode),
        tempo: convertTempo(data.body.tempo),
        id: data.body.id,
        duration: convertDurationToMinSec(data.body.duration_ms),
        time: convertTime(data.body.time_signature),
      
    };

    spotifyApi.getTrack(trackId).then(function(data) {
      console.log(data)
        processedTrackData.title = data.body.name
        processedTrackData.artist = data.body.artists[0].name
        processedTrackData.artistId = data.body.artists[0].id
    })
 

    console.log(processedTrackData)
  
    return processedTrackData

    
  }, function(err) {
    console.log(err);
  });
}

app.get('/track', (req, res) => {
  
  spotifyUri = req.query.spotifyUri

  setTimeout(getAudioFeature,100)
  
  //processedTrackData.romTitle = myFunctions.capitalizeString(chineseToPinyin(processedTrackData.title, {noTone: true}))
  //processedTrackData.romArtist = myFunctions.capitalizeString(chineseToPinyin(processedTrackData.artist, {noTone: true}))
  
  console.log(processedTrackData)
  res.send(processedTrackData)
  
})



// Retrieve an access token
spotifyApi.clientCredentialsGrant().then(
  function(data) {

    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);

    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
  },
  function(err) {
    console.log(
      'Something went wrong when retrieving an access token',
      err.message
    );
  }
)

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})


  