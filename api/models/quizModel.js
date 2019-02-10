const quizSchema = require('../schemas/quiz.js');
const mongoose = require('mongoose');
quizModel = mongoose.model('quiz', quizSchema.quiz);

module.exports = {

    create: function(data) {
        let newQuiz = new quizModel(data);
        return newQuiz.save().then(res => {
            return res;
        }).catch(err => {
            throw err;
        });
    },


    view: function() {

        return quizModel.find().then(response => {
            return response;
        }).catch(err => {
            return err;
        })
    },

    delete: function(id) {

        let qid = mongoose.Types.ObjectId(id);
        return quizModel.deleteOne({ "_id": qid }).then(res => {
            return res;
        }).catch(err => {
            return err;
        });

    },
    load: function(id) {
        let qid = mongoose.Types.ObjectId(id);
        return quizModel.find({ _id: qid }).then(res => {
            return res;
        }).catch(err => {
            return err;
        })
    }

    // edit: function(data) {
    //     let id = data._id;
    //     delete data.id;
    //     return quizModel.updateOne({ '_id': id }, { $set: data }).then(res => {
    //         return res;
    //     }).catch(err => {
    //         return err;
    //     })
    // }



};