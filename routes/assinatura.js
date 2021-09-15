var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('assinatura', { title: 'Express' });
});

router.get('assinatura' ,function(req, res, next){
  res.render('assinatura');
})



module.exports = router;