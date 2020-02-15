var express = require('express');
var router = express.Router();
var DAO = require('../models/rentDAO');


router.get('/', function (req, res, next) {
  DAO.getAll(function (results) {
    res.send(results);
  })

});

router.get('/users/:user', function (req, res, next) {
  DAO.getByUserName(req.params.user, function (results) {
    res.send(results);
  })

});

router.get('/cars/:car', function (req, res, next) {
  DAO.getByCarName(req.params.car, function (results) {
    res.send(results);
  })

});

router.get('/cars/type/:type', function (req, res, next) {
  DAO.getByCarType(req.params.type, function (results) {
    res.send(results);
  })

});

router.get('/maxId/', function (req, res, next) {
  DAO.getMaxRentId(function (results) {
    res.send(results);
  })

});

router.post('/', function (req, res, next) {
  DAO.insertRent(req.body, function (result) {
      res.send(result);
  }, next)
});

router.post('/users/', function (req, res, next) {
  DAO.insertRentToUser(req.body, function (result) {
      res.send(result);
  }, next)
});

router.post('/cars/', function (req, res, next) {
  DAO.insertRentOfCar(req.body, function (result) {
      res.send(result);
  }, next)
});

router.put('/', function (req, res, next) {
  DAO.updateRent(req.body, function (result) {
      res.send(result);
  }, next)
});

router.put('/users/', function (req, res, next) {
  DAO.updateRentToUser(req.body, function (result) {
      res.send(result);
  }, next)
});

router.put('/cars/', function (req, res, next) {
  DAO.updateRentOfCar(req.body, function (result) {
      res.send(result);
  }, next)
});

router.delete('/', function (req, res, next) {
  DAO.deleteRent(req.body, function (result) {
      res.send(result);
  }, next)
});

router.delete('/users/', function (req, res, next) {
  DAO.deleteRentFromUser(req.body, function (result) {
      res.send(result);
  }, next)
});


router.delete('/cars/', function (req, res, next) {
  DAO.deleteRentFromCar(req.body, function (result) {
      res.send(result);
  }, next)
});



module.exports = router;