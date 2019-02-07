const quesSchema = require('../schemas/ques.js');
const mongoose = require('mongoose');


module.exports = {

    create: function(data) {
        const quesModel = mongoose.model('questions', quesSchema.ques);
        let newQuestion = new quesModel(data);
        return newQuestion.save().then(res => {
            return res;
        }).catch(err => {
            throw err;
        });
    },

    view: function() {
        const quesModel = mongoose.model('questions', quesSchema.ques);
        return quesModel.find().then(response => {
            return response;
        }).catch(err => {
            return err;
        })
    }



};