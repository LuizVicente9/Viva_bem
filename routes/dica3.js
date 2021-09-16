var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('dica3', { title: 'Express' });
});

router.get('dica3' , function (req, res, next){
    res.render('dica3')
})


module.exports = router;