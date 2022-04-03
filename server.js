const PORT = 5000;
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("index.html");
});

app.listen(PORT, () => {
    console.log('Server started');
});