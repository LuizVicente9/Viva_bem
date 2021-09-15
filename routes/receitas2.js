var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('receitas2', { title: 'Express' });
});

router.get('/receitas2',function(req, res, next) {
  res.render('receitas2');
})



module.exports = router;