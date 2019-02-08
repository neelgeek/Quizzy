const router = require('express').Router();
const quesModel = require('../models/quesModel');


module.exports.controllerFunction = function(app) {
    router.get('/view/questions', (req, res) => {
        quesModel.view().then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json(err);
        })
    });



    // Returns Random Questions from the database in random manner
    router.get('/view/randomQ', (req, res) => {
        quesModel.Randomview().then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json(err);
        })
    });

    app.use('/', router);
}