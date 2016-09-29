var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PetSchema = new Schema({
	name: String,
	type: String,
	age: Number,
	vaccination: Boolean,
	fixed: Boolean,
	gender: String,
	picture: String,
	owner: [Owner.schema]

});

var Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;