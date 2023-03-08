const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema({
  name: { type: String, required: true },
  reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
  createdAt: { type: Date, default: Date.now },
  reactionBody: { type: String, required: true, maxLength: 280},
});

module.exports = reactionSchema;