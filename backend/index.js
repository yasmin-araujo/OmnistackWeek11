const express = require('express');

const app = express();

app.use(express.json());
 
app.get('/', (request, response) => {
    return response.send('Ola');
});

app.listen(3333);