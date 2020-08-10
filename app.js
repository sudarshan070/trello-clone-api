var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')

mongoose.connect('mongodb+srv://sudarshan:sudarshan070@clustertrello.up4qm.mongodb.net/trelloUser?retryWrites=true&w=majority',
    { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true },
    (err) => {
        console.log("connected", err ? err : true)
    }
)

var indexRouter = require('./routes/v1/index');
var usersRouter = require('./routes/v1/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"))
}

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});


module.exports = app;
