const express = require('express')
const bcrypt = require('bcryptjs')

const User = require('../models/user')
const router = new express.Router()

router.post('/users', async (req, res) => {
  
    req.body.password = await bcrypt.hash(req.body.password, 8)
    const user = new User(req.body)
    console.log(user)

    try {
      await user.save()
      res.status(201).send(user)
    } catch (e) {
      res.status(500).send(e)
    }
})

router.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.status(201).send(users)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)

        if (!user) {
            res.status(404).send()
        }
        
        res.send(user)
        
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
       
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
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