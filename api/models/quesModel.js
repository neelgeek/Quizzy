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

    Randomview: function() {

        // Returns the Questions in a Random manner
        return quesModel.countDocuments().then(length => {
            return quesModel.aggregate([{ $sample: { size: length } }]).then(response => {
                return response;
            }).catch(err => {
                return err;
            }).catch(err => {
                return err;
            })
        });

    },

    view: function() {

        return quesModel.find().then(response => {
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
    }



};