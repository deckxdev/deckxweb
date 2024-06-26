var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var AASSRouter = require('./routes/AASS');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/',express.static("public/index"));
app.use('/index',function (req, res){
  res.redirect('/');
});
app.use('/pack/*',function (req, res){
  res.redirect('/');
});
app.use('/contact',express.static("public/contact"));
app.use('/termsandconditions',express.static("public/terms_and_conditions"));
app.use('/privacypolicy',express.static("public/privacy_policy"));
app.use('/termsofuseeula',express.static("public/terms_of_use_eula"));
app.use('/apple-app-site-association', AASSRouter);
app.use('/*',express.static("/index"));

// catch 404 and forward to error handl
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
  res.redirect('/');
});

module.exports = app;
