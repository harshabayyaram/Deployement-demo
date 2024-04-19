const express = require("express");
const app = express();
const port = 5000;
const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'sql.freedb.tech',
    user: 'freedb_admin_demo_deployement',
    password: '*BSreHy5%&x$b6S',
    database: 'freedb_Demo_deployement'
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