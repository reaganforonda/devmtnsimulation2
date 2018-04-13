const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const cors = require('cors');
const port = 4000;
const app = express();


app.use(bodyParser.json());
app.use(cors());



app.listen(port, ()=> {
    console.log(`Creeping on Port: ${port}`);
})