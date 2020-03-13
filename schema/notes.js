const mongoose = require("mongoose");

const notesSchema = mongoose.Schema({
	title: String,
	content: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			text: String
		}
	}
})

module.exports = mongoose.model("note", notesSchema);