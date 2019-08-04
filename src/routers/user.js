const express = require('express')
const path = require('path')
const auth = require('../middleware/auth')

const User = require('../models/user')
const router = new express.Router()

router.post('/users', async (req, res) => {
  
    const user = new User(req.body)

    try {
      await user.save()
      const token = await user.generateAuthToken()
      res.cookie('auth_token', token)
      res.render('spotify-meta-tool')
    } catch (e) {
      res.status(500).send(e)
    }
})

router.get('/users/me', auth, async (req, res) => {
    try {
        console.log('in')
        res.status(201).send(req.user)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.post('/users/login', async (req, res) => {
    try {
        console.log('worked')
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()

        res.cookie('auth_token', token)
        
            
        res.redirect('../dashboard')
    
        //res.send( { user: user, token })
        
           

    } catch (e) {
        console.log(e)
        res.status(404).send(e)
        
    }
})

router.post('/users/logout', auth, async (req, res) => {
    try {

         req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })

        res.cookie('auth_token','')
        await req.user.save()
        
        res.redirect('..')
    } catch (e) {
        res.status(500).send(e)
    }
})

router.post('/users/logoutAll', auth, async (req,res) => {
    try {
        req.user.tokens = []

        await req.user.save()

        res.send()
    } catch (e) {

    }   res.status(500).send(e)
})


router.patch('/users/:id', async (req, res) => {

    const updates = Object.keys(req.body)
    const allowedUpdates = ['firstName', 'lastName', 'email', 'password']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    
    if(!isValidOperation) {
        return res.send({error: 'Operation is not valid'})
    }
    
    try {
        const user = await User.findById(req.params.id)
        updates.forEach((update) => user[update] = req.body[update])
        await user.save()

        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/users/:id', async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id)

    if (!user) {
        return res.status(404).send({error: 'User not found'})
    }

    try {
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }

})

module.exports = router