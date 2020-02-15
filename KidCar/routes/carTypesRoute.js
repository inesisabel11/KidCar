var express = require('express');
var router = express.Router();

var DAO = require('../models/carsDAO');

router.get('/', function (req, res, next) {
    DAO.getCarTypes(function (results) {
        res.json(results);
    })
});

router.get('/:type', function (req, res, next) {
    DAO.getCarTypesByDescription(req.params.type, function (results) {
        res.json(results);
    })
});

router.post('/', function (req, res, next) {
    DAO.insertType(req.body, function (result) {
        res.send(result);
    }, next)
});

router.put('/', function (req, res, next) {
    DAO.updateType(req.body, function (result) {
        res.send(result);
    }, next)
});

router.delete('/', function (req, res, next) {
    DAO.deleteType(req.body, function (result) {
        res.send(result);
    }, next)
});

module.exports = router;