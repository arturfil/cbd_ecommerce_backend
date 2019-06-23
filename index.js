const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
require('dotenv').config();

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(cookieParser());

// Database
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true
}).then(() => { console.log("Database connected")})

// Routes
app.use('/api/users', require('./routes/user'));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`ecommerce app runing on server ${port}`)
})