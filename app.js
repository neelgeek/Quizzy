const express = require('express');
const fs = require('fs');

//creating express envoirnment
const app = express();
const port = process.env.PORT || 8000;

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