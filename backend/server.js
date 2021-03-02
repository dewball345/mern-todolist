const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })

const connection = mongoose.connection

connection.once('open', () => {
    console.log("connected successfully");
})

const exercisesRouter = require('./routes/todoitems');
const usersRouter = require('./routes/users');

app.use('/todoitems', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(port)
})