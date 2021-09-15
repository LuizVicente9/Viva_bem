var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('receitas', { title: 'Express' });
});

router.get('/receitas',function(req, res, next) {
  res.render('receitas');
})



module.exports = router;