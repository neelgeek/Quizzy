const router = require('express').Router();
const quesModel = require('../models/quesModel');
const mongoose = require('mongoose');

//Contains all Routes for admin to manage the Question


module.exports.controllerFunction = function(app) {

    //Creates questions. Question details are submitted as POST req body
    router.post('/create/question', (req, res) => {
        quesModel.create(req.body).then(response => {
            res.status(200).json(response);
            console.log('Question Added');
        }).catch(err => {
            res.status(500).json(err);
        });
    });

    // Returns all the Questions in the Db.

    // Deletes the question with the id specified in the Query parameter
    router.delete('/delete/question/', (req, res) => {
        quesModel.delete(req.query.id).then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json(err);
        })
    });

    //Updates the question acc. to the details passed in the body.
    router.patch('/update/question', (req, res) => {
        quesModel.edit(req.body).then(updated => {
            console.log("Question Updated");
            res.status(200).json(updated);

        }).catch(err => {
            res.status(500).json(err);
        })
    });

    router.get('/view/questionlist', (req, res) => {
        quesModel.list().then(ques => {
            res.status(200).json(ques);
        }).catch(err => {
            res.status(500).json(err);
        })
    });



    router.get('/test/', (req, res) => {
        console.log('Request received at ' + req.url);
        res.status(200).json({
            message: req.query.id
        })
    });



    app.use('/admin', router);
}