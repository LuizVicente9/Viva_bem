var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('senha', { title: 'Express' });
});

router.get('senha' , function (req, res, next){
    res.render('senha')
})


module.exports = router;