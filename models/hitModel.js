/**
 * Created by HUQ on 9/22/15.
 */
var Mongoose = require('mongoose');

var hitStatus = Mongoose.Schema({
  hit: String,
  startDate: {type: Date, default: Date.now()},
  hitBy: Date,
  isHit: {type: Boolean, required: true, default: false}
});


var Hit = Mongoose.model('Hit', hitStatus);
module.exports =  Hit;