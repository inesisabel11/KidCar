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

router.get('/user/:user', function (req, res, next) {

  var data = {
      "user": req.params.user,
  };

  DAO.getByUserId(data, function (results) {
      res.json(results);
  }, next)
});

router.get('/user/:user/car/:car', function (req, res, next) {

  var data = {
      "user": req.params.user,
      "car": req.params.car 
  };

  DAO.getUserRentByCarName(data, function (results) {
      res.json(results);
  }, next)
});

router.get('/user/:user/carType/:type', function (req, res, next) {

  var data = {
      "user": req.params.user,
      "type": req.params.type 
  };

  DAO.getUserRentByCarType(data, function (results) {
      res.json(results);
  }, next)
});

router.get('/user/:user/date/:date', function (req, res, next) {

  var data = {
    "date": req.params.date,
      "user": req.params.user
  };

  DAO.getUserRentByDate(data, function (results) {
      res.json(results);
  }, next)
});

router.get('/user/:user/car/:car/carType/:type', function (req, res, next) {

  var data = {
      "user": req.params.user,
      "car": req.params.car,
      "type": req.params.type
  };

  DAO.getUserRentByCarNameAndType(data, function (results) {
      res.json(results);
  }, next)
});

router.get('/user/:user/car/:car/date/:date', function (req, res, next) {

  var data = {
    "date": req.params.date,
      "user": req.params.user,
      "car": req.params.car
  };

  DAO.getUserRentByCarNameAndDate(data, function (results) {
      res.json(results);
  }, next)
});

router.get('/user/:user/carType/:type/date/:date', function (req, res, next) {

  var data = {
    "date": req.params.date,
      "user": req.params.user,
      "type": req.params.type
  };

  DAO.getUserRentByCarTypeAndDate(data, function (results) {
      res.json(results);
  }, next)
});

router.get('/user/:user/car/:car/carType/:type/date/:date', function (req, res, next) {

  var data = {
    "date": req.params.date,
    "user": req.params.user,
    "car": req.params.car,
    "type": req.params.type
  };

  DAO.getUserRentByAll(data, function (results) {
      res.json(results);
  }, next)
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

router.get('/car/:car/rentStart/:start/rentEnd/:end', function (req, res, next) {

  var data = {
      "car": req.params.car,
      "start": req.params.start,
      "end": req.params.end
    
    DAO.getNumberOfCarRentsByDate(data, function (results) {
      res.json(results);
  }, next)
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

router.delete('/:id', function (req, res, next) {

  var data = {
    "rent_id": req.params.id
  };

  DAO.deleteRent(data, function (result) {
      res.send(result);
  }, next)
});

router.delete('/userRent/:rent', function (req, res, next) {

  var data = {
    "rent_user_rent_id": req.params.rent
  };

  DAO.deleteRentFromUser(data, function (result) {
      res.send(result);
  }, next)
});


router.delete('/carRent/:rent', function (req, res, next) {

  var data = {

    "rent_car_rent_id": req.params.rent
};

  DAO.deleteRentFromCar(data, function (result) {
      res.send(result);
  }, next)
});



module.exports = router;
