// Schema for users
const mongoose = require('mongoose')

//register
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    name: {
        type: String,
        required: [true, 'Please add an password']
    },
   
}, {
    timestamps: true
})

module.exports = ongoose.model('User', userSchema)


//register end