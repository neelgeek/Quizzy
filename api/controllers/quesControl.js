const router = require('express').Router();
const quesModel = require('../models/quesModel');


module.exports.controllerFunction = function(app) {
    router.get('/view/questions', (req, res) => {
        // req.query.count is used to limit the number of documents that are retrived. 
        // as the user clicks next page on the table,the more records are requested as per requirement
        quesModel.view(req.query.count).then(response => {
            console.log("Displaying " + req.query.count + " Questions");
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