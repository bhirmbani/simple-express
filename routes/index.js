var express = require('express');
var router = express.Router();
var db = require('../models');

// GET localhost:3000/
router.get('/', function(req, res, next) {
  // select * from "Users"
  db.User.findAll()
  .then(users => {
    // mengirim hasil findAll ke view sebagai users
    res.render('index', { title: 'Express', users: users });
  })
  .catch(err => {
    console.log(err.message);
  })
});

// POST localhost:3000/add
router.post('/add', (req, res, next) => {
  // mengambil data dari request post
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;

  // insert data dari form ke database
  db.User.create({
    'first_name': first_name,
    'last_name': last_name
  })
  .then(user => {
    // dialihkan ke localhost:3000/
    res.redirect('/');
  })
  .catch(err => {
    console.log(err.message);
  })
});


module.exports = router;
