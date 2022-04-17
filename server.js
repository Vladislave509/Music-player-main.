const PORT = 5000;
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(5000, () => {
    console.log('Server started');
});