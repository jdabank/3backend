const express = require('express');
const mongoose = require ('mongoose');
const app = express ();
const cors = require('cors')
const db = mongoose.connection;
require('dotenv').config()

app.use(express.json());

app.use(cors())

const PORT = process.env.PORT

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, () => {
  console.log('Praying to monGod...')
})

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

app.listen(PORT, () => console.log( 'Listening on port:', PORT));
