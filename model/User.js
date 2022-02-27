const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true  
    },
    date: {
        type: Date,
        required: false
    },
    gender: 
        {type: String, possibleValues: ['male','female']}
    
});

module.exports = User = model("user", userSchema);