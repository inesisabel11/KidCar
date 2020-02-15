var express = require('express');
var router = express.Router();
var countriesDAO = require('../models/countriesDAO');

/* GET users listing. */
router.get('/', function(req, res, next) {
  countriesDAO.getAll(function(results){
    res.send(results);  
  })
  
});

router.get('/name/:countryName', function(req, res, next){
  countriesDAO.getByCountryName(req.params.countryName, function(results){
      res.send(results);
    })
  });

  router.post('/', function (req, res, next) {
    countriesDAO.insertCountry(req.body, function (result) {
        res.send(result);
    }, next)
});

router.put('/', function (req, res, next) {
    countriesDAO.updateCountry(req.body, function (result) {
        res.send(result);
    }, next)
});

router.delete('/', function (req, res, next) {
    countriesDAO.deleteCountry(req.body, function (result) {
        res.send(result);
    }, next)
});


module.exports = router;