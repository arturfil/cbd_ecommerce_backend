const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const expressValidator = require('express-validator');

const app = express();
require('dotenv').config();

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// Database
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true
}).then(() => { console.log("Database connected")})

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/users', require("./routes/user"));
app.use("/braintree", require("./routes/braintree"));
app.use('/category', require("./routes/category"));
app.use('/orders/', require("./routes/order"));
app.use('/product', require('./routes/product'));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`ecommerce app runing on server ${port}`)
})