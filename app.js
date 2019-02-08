const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
//creating express envoirnment
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': 'http://localhost:8000'
    })
    next();
})
app.use(require('cors')({
    origin: 'http://localhost:8000',
    credentials: true
}));

const dbName = "quizzy";
mongoose.connect('mongodb://localhost/' + dbName);
mongoose.connection.once('open', function(err) {
    if (err) throw err;
    console.log("successfully connected to database!");
})


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