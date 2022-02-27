const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    paragraph: {
        type: String,
        required: true
    },
});

module.exports = Post = model("post", postSchema);