var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cadastroUsuario', { title: 'Express' });
});

router.get('/cadastroUsuario',function(req, res, next) {
  res.render('cadastroUsuario');
})



module.exports = router;