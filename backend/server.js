const express = require("express");
const app = express();
const port = 5000;
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'demo_data'
});

app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error fetching users' });
        } else {
            res.json(results);
        }
    });
});


db.query("select 1", (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to database");
        app.listen(port, () => {
            console.log(`Server running at ${port} `);
        });
    }
});