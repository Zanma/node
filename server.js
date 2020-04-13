const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.use(express.static(__dirname + '/public'));


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/:id', (req, res) => {
    // console.log(req.query);
    // console.log(req.body);
    console.log(req.header);
    // console.log(req.params);
    res.send('thx for request')
});

app.listen(3000)