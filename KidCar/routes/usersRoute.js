var express = require('express');
var router = express.Router();
var DAO = require('../models/usersDAO');

router.get('/', function (req, res, next) {
  DAO.getAll(function (results) {
    res.send(results);
  })

});

router.get('/:id', function (req, res, next) {
  DAO.getById(req.params.id, function (results) {
    res.send(results);
  })
});

router.get('/name/:procurar', function (req, res, next) {
  DAO.getByName(req.params.procurar, function (results) {
    res.send(results);
  })
});

router.get('/phone/:procurar', function (req, res, next) {
  DAO.getByPhone(req.params.procurar, function (results) {
    res.send(results);
  })
});

router.get('/nif/:procurar', function (req, res, next) {
  DAO.getByNIF(req.params.procurar, function (results) {
    res.send(results);
  })
});


router.get('/country/:procurar', function (req, res, next) {
  DAO.getByCountry(req.params.procurar, function (results) {
    res.send(results);
  })
});

router.get('/email/:procurar', function (req, res, next) {
  DAO.getByEmail(req.params.procurar, function (results) {
    res.send(results);
  })
});

router.post('/', function (req, res, next) {
  DAO.insertUser(req.body, function (result) {
      res.send(result);
  }, next)
});

router.put('/', function (req, res, next) {
  DAO.updateUser(req.body, function (result) {
      res.send(result);
  }, next)
});

router.delete('/', function (req, res, next) {
  DAO.deleteUser(req.body, function (result) {
      res.send(result);
  }, next)
});

module.exports = router;