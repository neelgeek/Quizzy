const quesSchema = require('../schemas/ques.js');
const mongoose = require('mongoose');
quesModel = mongoose.model('questions', quesSchema.ques);

module.exports = {

    create: function(data) {
        let newQuestion = new quesModel(data);
        return newQuestion.save().then(res => {
            return res;
        }).catch(err => {
            throw err;
        });
    },


    view: function(count = 0) {

        return quesModel.find().limit(parseInt(count)).then(response => {
            return response;
        }).catch(err => {
            return err;
        })
    },

    delete: function(id) {

        let qid = mongoose.Types.ObjectId(id);
        return quesModel.deleteOne({ "_id": qid }).then(res => {
            return res;
        }).catch(err => {
            return err;
        });

    },

    edit: function(data) {
        let id = data._id;
        delete data.id;
        return quesModel.updateOne({ '_id': id }, { $set: data }).then(res => {
            return res;
        }).catch(err => {
            return err;
        })
    },

    list: function() {
        return quesModel.find({}, { text: 1, _id: 1, level: 1 }).then(res => {
            return res;
        }).catch(err => {
            return err;
        })
    },
    Randomview: function(ids) {
        // Returns the Questions in a Random manner
        return quesModel.find({ _id: { $in: ids } }).then(response => {
            response.sort(function() {
                return Math.round(Math.random()) - 0.5
            });
            return response;
        }).catch(err => {
            return err;
        }).catch(err => {
            return err;
        });

    }




};