var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('receitas4', { title: 'Express' });
});

router.get('/receitas4',function(req, res, next) {
  res.render('receitas4');
})



module.exports = router;