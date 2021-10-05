var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('finalizar', { title: 'Express' });
});

router.get('/finalizar',function(req, res, next) {
  res.render('finalizar');
})



module.exports = router;