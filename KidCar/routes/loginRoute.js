var express = require('express');
var router = express.Router();
var DAO = require('../models/loginDAO');

/* GET users listing. */
router.get('/', function (req, res, next) {
  DAO.getAll(function (results) {
    res.send(results);
  })

});

router.get('/email/:email/password/:password', function (req, res, next) {

  var data = {
      "email": req.params.email,
      "password": req.params.password 
  };

  DAO.getByEmailAndPassword(data, function (results) {
      res.json(results);
  }, next)
});

router.get('/maxId', function (req, res, next) {
  DAO.getLoginMaxId(function (results) {
    res.send(results);
  })
});

router.post('/', function (req, res, next) {
  DAO.insertLogin(req.body, function (result) {
    res.send(result);
  }, next)
});

router.put('/', function (req, res, next) {
  DAO.updateLogin(req.body, function (result) {
    res.send(result);
  }, next)
});

router.delete('/', function (req, res, next) {
  DAO.deleteLogin(req.body, function (result) {
    res.send(result);
  }, next)
});

router.get('/userTypes/', function (req, res, next) {
  DAO.getAllUserTypes(function (results) {
    res.send(results);
  })
});

router.get('/userTypes/:procurar', function (req, res, next) {
  DAO.getUserTypeByDescription(req.params.procurar, function (results) {
    res.send(results);
  })
});

router.post('/userTypes/', function (req, res, next) {
  DAO.insertUserType(req.body, function (result) {
    res.send(result);
  }, next)
});

router.put('/userTypes/', function (req, res, next) {
  DAO.updateUserType(req.body, function (result) {
    res.send(result);
  }, next)
});

router.delete('/userTypes/', function (req, res, next) {
  DAO.deleteUserType(req.body, function (result) {
    res.send(result);
  }, next)
});

module.exports = router;