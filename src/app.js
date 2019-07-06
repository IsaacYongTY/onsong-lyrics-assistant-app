const path = require('path')
const hbs = require('hbs')

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// Setup path for express
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







const getAudioFeatures = require('./utils/get-audio-features')
const clientCredentialGrant = require('./utils/client-credential-grant')
const getTrackInfo = require('./utils/get-track-info')

let data = {}
let processedTrackData = {}

app.get('/track', (req, res) => {
  
  spotifyUri = req.query.spotifyUri

  clientCredentialGrant((accessToken) => {

    getAudioFeatures(accessToken, spotifyUri, (processedTrackData) => {
      data = processedTrackData
      console.log(data)

      getTrackInfo(accessToken, spotifyUri, (processedTrackData) => {
        data = processedTrackData
        console.log(data)

        res.send(data)
      })
    }) 
  })
  
  //processedTrackData.romTitle = myFunctions.capitalizeString(chineseToPinyin(processedTrackData.title, {noTone: true}))
  //processedTrackData.romArtist = myFunctions.capitalizeString(chineseToPinyin(processedTrackData.artist, {noTone: true}))
})


app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})


  