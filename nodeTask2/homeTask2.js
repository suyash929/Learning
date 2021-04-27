const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes');

app.use(express.json());

app.use('/hometask2', routes);

app.use((req, res) => {
// Invalid request
    res.json({
        error: {
            'name':'Error',
            'status':404,
            'message':'Invalid Request',
            'statusCode':404,
            'stack':'http://localhost:3000/'
        },
        message: 'Testing!'
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
