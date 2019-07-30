const path = require('path')
const hbs = require('hbs')

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const userRouter = require('./routers/user')
const songRouter = require('./routers/song')

// Setup path for express
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


// MongoDB
require('./db/mongoose.js')


app.use(express.static(publicDirectoryPath))

app.use(express.json())

app.use(userRouter)
app.use(songRouter)

// Configure express to use hbs
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)





app.get('/signup', async (req, res) => {
    res.render('signup', {
      title: 'Sign Up Here!',
      name: 'Isaac Yong'
    })
})


app.get('/login', (req, res) => {
  res.render('login', {
    title:'Login',
    name: 'Isaac Yong'
  })
})

// Program in use
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
const getRomTitle = require('./utils/get-rom-title')




let data = {}
let processedTrackData = {}

const containsChinese = require('contains-chinese')
const getFirstAlphabet = require('./utils/get-first-alphabet')

app.get('/track', (req, res) => {
  
  spotifyUri = req.query.spotifyUri
  console.log(spotifyUri)
  clientCredentialGrant((accessToken) => {

    getAudioFeatures(accessToken, spotifyUri, (processedTrackData) => {
      
      getTrackInfo(accessToken, spotifyUri, (processedTrackData) => {
        data = processedTrackData

        const isChinese = containsChinese(processedTrackData.title)

        if (isChinese) {
            processedTrackData.romTitle = getRomTitle(processedTrackData.title)
            processedTrackData.language = 'chinese'
            processedTrackData.firstAlphabet = getFirstAlphabet(processedTrackData.romTitle)
        } else {
            processedTrackData.language = 'english'
            processedTrackData.firstAlphabet = getFirstAlphabet(processedTrackData.title)
        }
        

        console.log(data)

        res.send(data)
      })
    }) 
  })
  
  
})


app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})


  