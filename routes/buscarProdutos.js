var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('buscarProdutos', { title: 'Express' });
});

router.get('buscarProdutos' , function (req, res, next){
    res.render('buscarProdutos')
})


module.exports = router;