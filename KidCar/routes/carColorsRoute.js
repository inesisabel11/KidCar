var express = require('express');
var router = express.Router();

var DAO = require('../models/carsDAO');

router.get('/', function (req, res, next) {
    DAO.getAllCarColors(function (results) {
        res.json(results);
    })
});

router.get('/:nome', function (req, res, next) {
    DAO.getCarColorsByName(req.params.nome, function (results) {
        res.json(results);
    })
});

router.post('/', function (req, res, next) {
    DAO.insertColor(req.body, function (result) {
        res.send(result);
    }, next)
});

router.put('/', function (req, res, next) {
    DAO.updateColor(req.body, function (result) {
        res.send(result);
    }, next)
});

router.delete('/', function (req, res, next) {
    DAO.deleteColor(req.body, function (result) {
        res.send(result);
    }, next)
});

module.exports = router;