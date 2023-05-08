const express = require('express');
const app = express();

const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
    const htmlPath = path.join(__dirname, '/views/home.html');

    res.sendFile(htmlPath);
});

app.get('/register', (req, res) => {
    const htmlPath = path.join(__dirname, '/views/register.html');

    res.sendFile(htmlPath);
});

app.get('/login', (req, res) => {
    const htmlPath = path.join(__dirname, '/views/login.html');

    res.sendFile(htmlPath);
});

app.listen(3000, (req, res) => {
    console.log('Escuchando en el puerto 3000');
});