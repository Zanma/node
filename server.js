const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('get root')
});
app.get('/profile', (req, res) => {
    res.send('get profile')
});
app.post('/profile', (req, res) => {
    const user = {
        name: 'sally',
        hobby: 'soccer'
    }
    res.send(user);    
} );

app.listen(3000)