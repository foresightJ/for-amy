// require the installed mongoose
const mongoose = require('mongoose');
// calling the Schema method from Mongoose
const Schema = mongoose.Schema;
// create our database Schema
const postSchema = new Schema(
	{ content: { type: String, required: true } },
	{ timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);
