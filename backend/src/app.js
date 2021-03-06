const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const log = console.log;

const app = express();
var port = 3333;

app.use(cors());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(routes);


app.listen(port, ()=> log('Server is running / PORT:'+ port));
