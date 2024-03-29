'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.get('/testApi', function(request, response) {
    response.send('Hello from Express!');
    console.log("I am get called ");
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);