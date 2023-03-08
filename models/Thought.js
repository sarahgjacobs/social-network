const mongoose = require('mongoose');
const ReactionSchema = require("./Reaction");


const thoughtSchema = new mongoose.Schema({
  name: { type: String, required: true },
  thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
  lastAccessed: { type: Date, default: Date.now },
  reactions: [ReactionSchema] ,

});

const Thought = mongoose.model('Thought', thoughtSchema);

const handleError = (err) => console.error(err);


module.exports = Thought;