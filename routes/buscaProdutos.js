var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('buscaProdutos', { title: 'Express' });
});

router.get('buscaProdutos' , function (req, res, next){
    res.render('buscaProdutos')
})


module.exports = router;