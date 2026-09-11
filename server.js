const express = require('express');

const mongodb = require('./data/database');
const app = express();

const port = process.env.PORT || 3001;

app.use('/', require('./routes'));

mongodb.initdb((err) => {
    if (err) {
        console.log(err);
    }
    else {
        app.listen(port, () => {
            console.log(`Database is listening and node isrunning on ${port}`);
        });
    }
});
