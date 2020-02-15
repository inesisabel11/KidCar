var express = require('express');
var router = express.Router();

var DAO = require('../models/favoritesDAO');

router.get('/', function (req, res, next) {
    DAO.getAll(function (results) {
        res.json(results);
    })
});

router.get('/user/:id/total/', function (req, res, next) {
    DAO.getFavoritesTotal(req.params.id, function (results) {
        res.json(results);
    }, next)
});

router.get('/user/:id/', function (req, res, next) {

    var data = {
        "user": req.params.id,
    };

    DAO.getUserFavorites(data, function (results) {
        res.json(results);
    }, next)
});

router.get('/user/:id/car/:car', function (req, res, next) {

    var data = {
        "user": req.params.id,
        "car": req.params.car 
    };

    DAO.getUserFavoriteByCar(data, function (results) {
        res.json(results);
    }, next)
});

router.get('/user/:id/type/:type', function (req, res, next) {

    var data = {
        "user": req.params.id,
        "type": req.params.type 
    };

    DAO.getUserFavoriteByType(data, function (results) {
        res.json(results);
    }, next)
});

router.get('/user/:id/color/:color', function (req, res, next) {

    var data = {
        "user": req.params.id,
        "color": req.params.color 
    };

    DAO.getUserFavoriteByColor(data, function (results) {
        res.json(results);
    }, next)
});

router.get('/user/:id/car/:car/type/:type', function (req, res, next) {

    var data = {
        "user": req.params.id,
        "car": req.params.car,
        "type": req.params.type 
    };

    DAO.getUserFavoriteByCarAndType(data, function (results) {
        res.json(results);
    }, next)
});

router.get('/user/:id/type/:type/color/:color', function (req, res, next) {

    var data = {
        "user": req.params.id,
        "color": req.params.color,
        "type": req.params.type 
    };

    DAO.getUserFavoriteByTypeAndColor(data, function (results) {
        res.json(results);
    }, next)
});

router.get('/user/:id/car/:car/color/:color', function (req, res, next) {

    var data = {
        "user": req.params.id,
        "car": req.params.car,
        "color": req.params.color 
    };

    DAO.getUserFavoriteByCarAndColor(data, function (results) {
        res.json(results);
    }, next)
});

router.get('/user/:id/car/:car/type/:type/color/:color', function (req, res, next) {

    var data = {
        "user": req.params.id,
        "car": req.params.car,
        "color": req.params.color,
        "type": req.params.type 
    };

    DAO.getUserFavoriteByAll(data, function (results) {
        res.json(results);
    }, next)
});

router.get('/cars/:car', function (req, res, next) {
    DAO.getByCar(req.params.car, function (results) {
        res.json(results);
    })
});

router.get('/users/:name', function (req, res, next) {
    DAO.getByUser(req.params.name, function (results) {
        res.json(results);
    })
});

router.get('/cars/type/:type', function (req, res, next) {
    DAO.getByCarType(req.params.type, function (results) {
        res.json(results);
    })
});

router.get('/cars/color/:color', function (req, res, next) {
    DAO.getByCarColor(req.params.color, function (results) {
        res.json(results);
    })
});

router.post('/', function (req, res, next) {
    DAO.insertFavorite(req.body, function (result) {
        res.send(result);
    }, next)
});

router.put('/', function (req, res, next) {
    DAO.updateFavorite(req.body, function (result) {
        res.send(result);
    }, next)
});

router.delete('/', function (req, res, next) {
    DAO.deleteFavorite(req.body, function (result) {
        res.send(result);
    }, next)
});

module.exports = router;
