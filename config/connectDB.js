const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://achref25:achref2522@cluster0.e9c0p.mongodb.net/crypto_web?retryWrites=true")
        console.log("the database is connected");
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;