var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('dicaNutri', { title: 'Express' });
});

router.get('dicaNutri' , function (req, res, next){
    res.render('dicaNutri')
})


module.exports = router;