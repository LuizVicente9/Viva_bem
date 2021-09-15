var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('carrinho', { title: 'Express' });
});

router.get('carrinho' , function (req, res, next){
    res.render('carrinho')
})


module.exports = router;