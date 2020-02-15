var express = require('express');
var router = express.Router();

var DAO = require('../models/carsDAO');

router.get('/', function (req, res, next) {
    DAO.getAll(function (results) {
        res.json(results);
    }, next)
});

router.get('/id/:id', function (req, res, next) {
    DAO.getById(req.params.id, function (results) {
        res.json(results);
    }, next)
});

router.get('/total/', function (req, res, next) {
    DAO.getCarTotal(function (results) {
        res.json(results);
    }, next)
});



router.get('/name/:name', function (req, res, next) {
    DAO.getByName(req.params.name, function (results) {
        res.json(results);
    }, next)
});

router.get('/name/:name/type/:type', function (req, res, next) {

    var data = {
        "name": req.params.name,
        "type": req.params.type 
    };

    DAO.getByNameAndType(data, function (results) {
        res.json(results);
    }, next)
});

router.get('/name/:name/color/:color', function (req, res, next) {

    var data = {
        "name": req.params.name,
        "color": req.params.color 
    };

    DAO.getByNameAndColor(data, function (results) {
        res.json(results);
    }, next)
});

router.get('/type/:type', function (req, res, next) {
    DAO.getByType(req.params.type, function (results) {
        res.json(results);
    }, next)
});

router.get('/type/:type/color/:color', function (req, res, next) {

    var data = {
        "color": req.params.color,
        "type": req.params.type 
    };

    DAO.getByTypeAndColor(data, function (results) {
        res.json(results);
    }, next)
});

router.get('/color/:color', function (req, res, next) {
    DAO.getByColor(req.params.color, function (results) {
        res.json(results);
    }, next)
});

router.get('/name/:name/type/:type/color/:color', function (req, res, next) {

    var data = {
        "name": req.params.name,
        "color": req.params.color,
        "type": req.params.type 
    };

    DAO.getByAll(data, function (results) {
        res.json(results);
    }, next)
});

router.post('/', function (req, res, next) {
    DAO.insertCar(req.body, function (result) {
        res.send(result);
    }, next)
});

router.put('/', function (req, res, next) {
    DAO.updateCar(req.body, function (result) {
        res.send(result);
    }, next)
});

router.delete('/', function (req, res, next) {
    DAO.deleteCar(req.body, function (result) {
        res.send(result);
    }, next)
});

module.exports = router;