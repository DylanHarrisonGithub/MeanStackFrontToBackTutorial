const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const config = require('./config/database');
const users = require('./routes/users');

const app = express();
const port = 3000;

mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
    console.log('Connected to database '+ config.database);
});

app.use(cors());
app.use(bodyParser.json());
app.use('/users', users);
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.get('/', (req, res) => {
    res.send('invalid endpoint');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () =>{
    console.log('server started on port '+port);
});
