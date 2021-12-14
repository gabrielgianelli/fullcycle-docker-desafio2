const express = require('express');
const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql');
const connection = mysql.createConnection(config);

const sql = `SELECT name FROM people`;
connection.query(sql, function (err, result) {
    let namesList = '';
    result.forEach(person => {
        namesList += `<li>${person.name}</li>`;
    });
    const html = `<h1>Full Cycle Rocks!</h1><ul>${namesList}</ul>`;
    app.get('/', (req, res) => {
        res.send(html);
    });
});
connection.end();

app.listen(port, () => {
    console.log('Rodando na porta ' + port);
});