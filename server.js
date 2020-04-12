const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('helloo');
    next();
})

app.get('/', (req, res) => {
    res.send('test test')
});

app.listen(3000)