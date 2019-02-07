const router = require('express').Router();
const quesModel = require('../models/quesModel');
const mongoose = require('mongoose');

module.exports.controllerFunction = function(app) {

    router.post('/create/question', (req, res) => {

        quesModel.create(req.body).then(response => {
            res.status(200).json(response);
            console.log('Question Added');
        }).catch(err => {
            res.status(500).json(err);
        });
    });

    router.get('/view/questions', (req, res) => {
        quesModel.view().then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json(err);
        })
    });

    router.get('/test', (req, res) => {
        console.log('Request received at ' + req.url);
        res.status(200).json({
            message: 'Hello'
        })
    });



    app.use('/admin', router);
}