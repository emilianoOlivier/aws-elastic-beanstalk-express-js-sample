const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('res send to express js and con la matregnas de token'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
