const express = require('express')

const router = new express.Router()

const Track = require('../models/track')

const auth = require('../middleware/auth')

const getAudioFeatures = require('../utils/get-audio-features')

router.get('/tracks', auth, async (req, res) => {
   
    const input = req.query.input
    
    try {
        const data = await getAudioFeatures(input)
        data.contributorId = req.user._id
        res.send(data)
  
    } catch (e) {
        res.status(500).send(e)
    }
  
  })

router.post('/tracks', async (req, res) => {
    try {
        const searchResult = await Track.findOne({uri: req.body.uri})
        
        if(searchResult) {
            console.log('Track exist')
            return res.send('Track exist')
        }
        
        const track = new Track(req.body)
        await track.save()
        res.status(201).send(track)
    
        
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/tracks/:id', async (req, res) => {
   
    const updates = Object.keys(req.body)
    const allowedUpdates = ['artist', 'artistId', 'duration', 'firstAlphabet', 'spotifyId', 'key', 'language', 'romTitle', 'tempo', 'time', 'title', 'verified']

    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    
    if (!isValidOperation) {
        return res.status(500).send({error: 'Operation is not valid'})
    }

    try {
        const track = await Track.findById(req.params.id)
    
        if (!track) {
            return res.status(404).send()
        }

        updates.forEach((update) => track[update] = req.body[update])
        
        await track.save()
        res.send(track)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/tracks/:id', async (req, res) => {
    try {
        const track = await Track.findByIdAndDelete(req.params.id)

        if (!track) {
            return res.status(404).send()
        }
        res.send(track)
    } catch (e) {
        res.status(500).send(e)
    }
})


module.exports = router