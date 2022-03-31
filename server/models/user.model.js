const mongoose = require('mongoose');

const User = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		phone: {
			type: Number,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		quote: { type: String },
	},
	{ collection: 'user-data' }
);

const model = mongoose.model('UserData', User);

module.exports = model;
