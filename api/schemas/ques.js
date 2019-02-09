const mongoose = require('mongoose');

module.exports.ques = mongoose.Schema({
    text: { type: String },
    options: Object,
    correct: { type: Object },
    level: { type: String }
});