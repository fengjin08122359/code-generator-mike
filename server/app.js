var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var projectRouter = require('./routes/project');
var componentsRouter = require('./routes/components');
var exportZipRouter = require('./routes/exportZip');
var uploadRouter = require('./routes/upload');
var postmanRouter = require('./routes/postman');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/project', projectRouter);
app.use('/components', componentsRouter);
app.use('/exportZip', exportZipRouter);
app.use('/uploadFile', uploadRouter);
app.use('/postman', postmanRouter);

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers","content-type");
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
