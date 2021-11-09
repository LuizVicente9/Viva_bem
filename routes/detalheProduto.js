var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('detalheproduto', { title: 'Express' });
});

router.get('detalheproduto' , function (req, res, next){
    res.render('detalheproduto')
})


module.exports = router;