var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('receitas3', { title: 'Express' });
});

router.get('/receitas3',function(req, res, next) {
  res.render('receitas3');
})



module.exports = router;