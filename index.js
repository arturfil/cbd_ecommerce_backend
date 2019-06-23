const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');

const app = express();
require('dotenv').config();

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(cookieParser());
app.use(expressValidator());

// Database
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true
}).then(() => { console.log("Database connected")})

// Routes
app.use('/api/users', require('./routes/auth'));
app.use('/api/users', require("./routes/user"));
app.use('/api/category', require("./routes/category"));
app.use('/api/product', require('./routes/product'));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`ecommerce app runing on server ${port}`)
})