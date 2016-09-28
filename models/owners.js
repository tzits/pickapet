var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Pet = require('./pets');

var OwnerSchema = new Schema({
	name: String,
	email: String,
	location: String,
	pets: [ Pet.schema ]
})

var Owner = mongoose.model('Owner', OwnerSchema);

module.exports = Owner;