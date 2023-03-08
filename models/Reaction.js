const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastAccessed: { type: Date, default: Date.now },
  reactionBody: { type: String, required: true, maxLength: 280},
});

const Reaction = mongoose.model('Reaction', reactionSchema);

const handleError = (err) => console.error(err);


module.exports = Reaction;