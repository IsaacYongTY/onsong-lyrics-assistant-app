const mongoose = require('mongoose')
const validator = require('validator')


const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },

    lastName: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw Error('E-mail is invalid')
            }
        }
    },

    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6

    },

    subscription: {
        type: Boolean,
        default: false
    },

    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]


})

userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = await jwt.sign({_id: user._id.toString()}, process.env.JWT_SECRET)

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if(!user) {
        throw new Error({error: 'Unable to login!'})
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch) {
        throw new Error({error: 'Unable to login!'})
    }

    return user
}

userSchema.pre('save', async function (next) {
    const user = this

    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()

})

const User = mongoose.model('User', userSchema)

module.exports = User