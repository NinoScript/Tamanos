var express = require('express');
var router = express.Router();

var tamanos = require('../public/javascripts/tamanos.js');
var c = tamanos.cantidadDeTamanosOptima(26, 39, 5, 3);
console.log(c);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express ' + c });
});

module.exports = router;
