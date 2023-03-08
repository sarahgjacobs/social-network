const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastAccessed: { type: Date, default: Date.now },
  email: { type: String, unique: true, required: true, match: // need to find how to match
});

const User = mongoose.model('User', userSchema);

const handleError = (err) => console.error(err);


module.exports = User;