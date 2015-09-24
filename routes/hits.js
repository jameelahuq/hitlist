/**
 * Created by HUQ on 9/22/15.
 */
var express = require('express');
var router = express.Router();
var Hit = require('../models/hitModel');


router.get('/', function(req, res) {
  //res.send('ok');

  //find give us an array
  Hit.find({}, function(err, hits) {
    res.send(err || hits);
  });
});

router.post('/', function(req, res, next) {
  console.log('req.body:', req.body);

  var hit = new Hit(req.body);
  console.log('hit:', hit);

  hit.save(function(err, savedHit){
    console.log('error:', err);
    console.log("new hit" + savedHit);
    res.status(err ? 400: 200).send(err || savedHit);
  });
});

router.delete('/', function(req,res, next) {
  Hit.findByIdAndRemove(req.body.id,function(err, deletedHit) {
    (err || !deletedHit) ? res.status(400).send(err || "hit not found") : res.send(deletedHit)
  });
});

module.exports = router;
