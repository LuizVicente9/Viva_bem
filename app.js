var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var login = require('./routes/login');
var finalizarRouter = require('./routes/finalizar');
//var usersRouter = require('./routes/users');
var receitasRouter = require('./routes/receitas');
var receitas1Router = require('./routes/receitas1');
var receitas2Router = require('./routes/receitas2');
var receitas3Router = require('./routes/receitas3');
var receitas4Router = require('./routes/receitas4');
var assinaturaRouter = require('./routes/assinatura');
var buscaProdutosRouter = require('./routes/buscaProdutos');
var carrinhoRouter = require('./routes/carrinho');
var dica3Router = require('./routes/dica3');
var dica2Router = require('./routes/dica2');
var dicaNutriRouter = require('./routes/dicaNutri');
var UserController = require('./routes/users');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', login);
app.use('/finalizar', finalizarRouter);
app.use('/users', UserController);
app.use('/receitas', receitasRouter);
app.use('/receitas1', receitas1Router);
app.use('/receitas2', receitas2Router);
app.use('/receitas3', receitas3Router);
app.use('/receitas4', receitas4Router);
app.use('/assinatura', assinaturaRouter);
app.use('/buscaProdutos', buscaProdutosRouter);
app.use('/carrinho', carrinhoRouter);
app.use('/dica3', dica3Router);
app.use('/dica2', dica2Router);
app.use('/dicaNutri', dicaNutriRouter);

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
