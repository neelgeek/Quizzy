const router = require('express').Router();
const quizModel = require('../models/quizModel');
const mongoose = require('mongoose');


module.exports.controllerFunction = function(app) {


    router.post('/create/quiz', (req, res) => {
        quizModel.create(req.body).then(response => {
            res.status(200).json(response);
            console.log('Quiz Added');
        }).catch(err => {
            res.status(500).json(err);
        });
    });

    router.get('/view/quiz', (req, res) => {
        quizModel.view().then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json(err);
        })
    });

    router.delete('/delete/quiz', (req, res) => {
        quizModel.delete(req.query.id).then(response => {
            console.log('Quiz delete with id: ' + req.query.id);
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json(err);
        })
    });

    app.use('/admin', router);
}