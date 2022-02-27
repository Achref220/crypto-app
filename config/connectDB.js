const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("the database is connected");
        mongoose.connection.on('connected', () => {
            console.log("Mongoose is Connected !!!!");
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;