const path = require('path')
const hbs = require('hbs')

const express = require('express')
const app = express()
const port = process.env.PORT || 3000


const userRouter = require('./routers/user')
const trackRouter = require('./routers/track')

const auth = require('./middleware/auth')

const cookieParser = require('cookie-parser')

// Setup path for express
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


// MongoDB
require('./db/mongoose.js')



app.use(express.static(publicDirectoryPath))
app.use(express.json())

app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use((req, res, next) => {
  console.log(req.method, req.path)

  next()
})



app.use(userRouter)
app.use(trackRouter)

// Configure express to use hbs
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)





app.get('/signup', (req, res) => {
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


app.get('', (req, res) => {

  if(req.cookies.auth_token) {
  
    res.render('dashboard', {
      title: 'Dashboard',
      userFirstName: req.user.firstName?  req.user.firstName : 'Unknown'
    })
  } else {
    res.render('index', {
      title: 'Home',
      user: 'user',
      name: 'Isaac Yong'
    })
  }
  
  
})

app.get('/dashboard', auth, (req, res) => {
  res.render('dashboard', {
    title: 'Dashboard',
    userFirstName: req.user.firstName
  })
})

app.get('/dashboard/bpm', (req, res) => {
  res.render('bpm', {
    title: 'BPM Tool',
    name: 'Isaac Yong'
  })
})

app.get('/dashboard/prog', auth, (req, res) => {
  res.render('progression-generator', {
    title: 'Progression Generator',
    name: 'Isaac Yong'
  })
})

app.get('/dashboard/spotify-meta-tool', auth, (req, res) => {
  res.render('spotify-meta-tool', {
    title: 'Spotify Meta Tool',
    name: 'Isaac Yong'
  })
})

app.get('/dashboard/lead-sheet-lyrics-helper', auth, (req, res) => {
  res.render('lead-sheet-lyrics-helper', {
    title: 'Lead Sheet Lyrics Helper',
    name: 'Isaac Yong'
  })
})

app.get('logout', auth, (req,res) => {
  res.render('logout')
})


app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})


