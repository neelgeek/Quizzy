const router = require('express').Router();
const quizModel = require('../models/quizModel');
const quesModel = require('../models/quesModel');

module.exports.controllerFunction = function(app) {

    // Returns Random Questions from the database in random manner
    router.post('/load/questions', (req, res) => {
        quesModel.Randomview(req.body.questions).then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json(err);
        })
    });


    router.get('/load/quiz/', (req, res) => {
        quizModel.load(req.query.id).then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json(err);
        });
    });


    app.use('/', router);
}