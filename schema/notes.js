const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
	title: String,
	content: String,
})

module.exports = mongoose.model("Note", notesSchema);