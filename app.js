const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();

app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;
const data = require(`./networkdata.js`);
app.get('/', (req, res) => {
  res.render('index', { data: data });
});

app.use(express.json());

//mongoose.connect(`mongodb://127.0.0.1:27017/auth`, {
    mongoose.connect('mongodb+srv://tempAcc:R8IsT7R8AVnoFDVD@cluster0.t7xrj2b.mongodb.net/IFT-402');   // useNewUrlParser: true,
    //useUnifiedTopologu: true,
    //useCreateIndex: true,
    //useFindAndModify: false,
;

    const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});