const express = require('express');
const connectDB = require('./config/connectDB');
const routes = require('./routes/user')
const postRouter = require('./routes/post');
const cors = require('cors');
const path = require('path');
require('dotenv').config();


const app = express();
app.use(cors());
require('dotenv').config();
app.use(express.json());
connectDB();
const port = process.env.PORT || 4500;
app.use("/api/user", routes, postRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}



app.get('/', (req, res) => res.send('backend only!!!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));