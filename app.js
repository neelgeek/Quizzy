const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
require('dotenv').config();
//creating express envoirnment
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': '*'
    })
    next();
})
app.use(require('cors')({
    origin: '*',
    credentials: true
}));
const dbName = "quizzy";

mongoose.connect('mongodb://localhost/' + dbName)
    .then(function(params) {
        console.log("successfully connected to database!");
    }).catch(err => {
        console.log(err.errmsg);
    });



// mongoose.connect('mongodb://' + process.env.USER + ":" + process.env.PASS + "@ds127995.mlab.com:27995/" + dbName, { useNewUrlParser: true })
//     .then(function(params) {
//         console.log("successfully connected to database!");
//     }).catch(err => {
//         console.log(err.errmsg);
//     });


//Including the Controllers and passing the Express object
fs.readdirSync('./api/controllers').forEach(function(file) {
    if (file.indexOf('.js')) {
        const route = require('./api/controllers/' + file);
        route.controllerFunction(app);
    }
})


app.listen(port, function() {
    console.log('App server running @ port ' + port);


});