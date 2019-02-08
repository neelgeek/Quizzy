const mongoose = require('mongoose');

module.exports.quiz = mongoose.Schema({
    title: { type: String },
    marks: Object,
    questions: Object
});