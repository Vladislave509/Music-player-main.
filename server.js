const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const app = express();
const urlencodedParser = express.urlencoded({extended: false});

async function getdata(query) {
    let dataq = {
        authorization:"SELECT * FROM users",
    }
    let db = new sqlite3.Database('music-player.db');
    var promise = new Promise(function (resolve, reject) {
        db.all(dataq[query], function (err, row) {
            if (err) {
                reject(console.log('ошибо4ка'));
            } else {
                resolve(row);
            }
        });
    });
    let rows = await promise;
    db.close();
    return rows
};

app.get("/", urlencodedParser, (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/auth", urlencodedParser, (req, res) => {
    password = req.body.pass;
    username = req.body.username;
    body = "authorization";
    getdata(body).then((rows) => {
        console.log(rows);
        console.log(username);
        console.log(password);
    });
});

app.listen(5000, urlencodedParser ,() => {
    console.log('Server started');
});

// body = "";
// getdata(body).then((rows) => {
// });