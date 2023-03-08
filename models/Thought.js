const { Schema, model } = require('mongoose');
const ReactionSchema = require("./Reaction");


const thoughtSchema = new Schema({
    name: { type: String, required: true },
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    createdAt: { type: Date, default: Date.now },
    reactions: [ReactionSchema],

},
    {
        toJSON: { getters: true },
        id: false
    }
);

const Thought = model('Thought', thoughtSchema);



module.exports = Thought;