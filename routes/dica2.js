var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('dica2', { title: 'Express' });
});

router.get('dica2' , function (req, res, next){
    res.render('dica2')
})


module.exports = router;