var express = require('express');
var router = express.Router();
var Mongoose = require('mongoose');

//this is the format of the object you are saving
var User = Mongoose.model('User', {username: String});
/* GET users listing. */


router.get('/', function(req, res) {

  User.find({}, function(err, users) {
    res.send(users);
  });
});

router.post('/', function(req, res, next) {

  var user = new User(req.body);

  user.save(function(err, savedUser){
    console.log("found" + savedUser);
    res.send(savedUser);
  });
});


module.exports = router;
