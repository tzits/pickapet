var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/pickapet");
var Pet = require('./Pet');
var Owner = require('./Owner');

module.exports.Pet = Pet;
module.exports.Owner = Owner;