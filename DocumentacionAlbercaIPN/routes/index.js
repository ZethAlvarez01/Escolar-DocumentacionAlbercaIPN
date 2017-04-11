var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/inicio', function(req, res, next) {
    res.render('inicio', { title: 'Contexto del Proyecto' });
});
router.get('/', function(req, res, next) {
    res.render('inicio', { title: 'Contexto del Proyecto' });
});
router.get('/analisis', function(req, res, next) {
    res.render('analisis', { title: 'Analisis del Proyecto' });
});

module.exports = router;