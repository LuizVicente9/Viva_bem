var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('receitas1', { title: 'Express' });
});

router.get('/receitas1',function(req, res, next) {
  res.render('receitas1');
})



module.exports = router;