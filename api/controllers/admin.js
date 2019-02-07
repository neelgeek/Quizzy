const router = require('express').Router();

module.exports.controllerFunction = function(app) {
    router.get('/test', (req, res) => {
        console.log('Request received at ' + req.url);
        res.status(200).json({
            message: 'Hello'
        })
    })


    app.use('/admin', router);
}