const mongoose = require('mongoose')

userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    artist: {
        type: String,
        required: true
    },

    artistId: {

    },

    duration: {
        type: String,
    },

    firstAlphabet: {
        type: String
    },

    uri: {
        type: String
    },

    key: {
        type: String
    },

    language: {
        type: String
    },

    romTitle: {
        type: String,
    },

    tempo: {
        type: Number,
    },

    time: {
        type: String,

    },

    verified: {
        type: Boolean,
        default: false
    },

    rawData: {
        type: Object
    },

    contributorId: {
        type: String
    }
})


const Track = mongoose.model('Track', userSchema)

module.exports = Track