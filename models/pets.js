var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PetSchema = new Schema({
	name: String,
	type: String,
	age: Number,
	vaccination: Boolean,
	neutered: Boolean,
	gender: String,
	picture: String
})

var Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;