var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('dica1', { title: 'Express' });
});

router.get('dica1' , function (req, res, next){
    res.render('dica1')
})


module.exports = router;