const User = require('../models/User')
const { errorHandler } = require('../helpers/dberrorHandler')

exports.sayHi = (req,res) => {
  res.json({ message:" reached endpoint"});
 }

exports.signup = (req, res) => {
  console.log('req.body', req.body);
  const user = new User(req.body);
  user.save((err, user) => {
    console.log("reached signup endpoint")
    if (err) {
      return res.status(400).json({
        err: errorHandler(err)
      })
    }
    res.json({
      user
    })
  })
 }
