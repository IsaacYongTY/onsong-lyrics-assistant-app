const express = require('express')

const router = new express.Router()

const Song = require('../models/song')

router.post('/songs', async (req, res) => {
    try {
        const song = new Song(req.body)
        await song.save()
        res.status(201).send(song)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/songs/:id', async (req, res) => {
   
    const updates = Object.keys(req.body)
    const allowedUpdates = ['artist', 'artistId', 'duration', 'firstAlphabet', 'spotifyId', 'key', 'language', 'romTitle', 'tempo', 'time', 'title', 'verified']

    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    
    if (!isValidOperation) {
        return res.status(500).send({error: 'Operation is not valid'})
    }

    try {
        const song = await Song.findById(req.params.id)
    
        if (!song) {
            return res.status(404).send()
        }

        updates.forEach((update) => song[update] = req.body[update])
        
        await song.save()
        res.send(song)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/songs/:id', async (req, res) => {
    try {
        const song = await Song.findByIdAndDelete(req.params.id)

        if (!song) {
            return res.status(404).send()
        }
        res.send(song)
    } catch (e) {
        res.status(500).send(e)
    }
})


module.exports = router