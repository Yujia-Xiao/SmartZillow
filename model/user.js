var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
	email: {type: String, required: true, unique: true},
	password: {type: String, required:true},
	created_at: Date,
	updated_at: Date
});

userSchema.pre('save', function(next){
	var currentData = new Date();

	this.updated_at = currentData;

	if(!this.created_at){
		this.created_at = currentData;
	}

	next();
});

var User = mongoose.model('users',userSchema);

module.exports = User;
