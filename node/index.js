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

const insert = `INSERT INTO people(name) values('Gabriel')`;
connection.query(insert);

const select = `SELECT name FROM people`;
connection.query(select, function (err, result) {
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