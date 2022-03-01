const express = require('express');
const connectDB = require('./config/connectDB');
const routes = require('./routes/user')
const postRouter = require('./routes/post');
const cors = require('cors');
require('dotenv').config();


const app = express();
app.use(cors());
require('dotenv').config();
app.use(express.json());
connectDB();
const port = process.env.PORT || 4500;
app.use("/api/user", routes, postRouter);

app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})



app.get('/', (req, res) => res.send('backend only!!!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));