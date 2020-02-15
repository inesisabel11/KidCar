var express = require('express');
var router = express.Router();
var commentsDAO = require('../models/commentsDAO');

router.get('/', function (req, res, next) {
  commentsDAO.getAll(function (results) {
    res.send(results);
  })

});

router.get('/text/:commentText', function (req, res, next) {
  commentsDAO.getByCommentText(req.params.commentText, function (results) {
    res.send(results);
  })
});

router.get('/date/:commentDate', function (req, res, next) {
  commentsDAO.getByCommentData(req.params.commentDate, function (results) {
    res.send(results);
  })
});

router.get('/users/:id', function (req, res, next) {
  commentsDAO.getByUserId(req.params.id, function (results) {
    res.send(results);
  })
});

router.get('/users/name/:name', function (req, res, next) {
  commentsDAO.getByUserName(req.params.name, function (results) {
    res.send(results);
  })
});

router.get('/date/:date', function (req, res, next) {
  commentsDAO.getByDate(req.params.date, function (results) {
    res.send(results);
  })
});

router.get('/car/:id', function (req, res, next) {

  var data = {
    "id": req.params.id,
};

  commentsDAO.getCarComments(data, function (results) {
    res.send(results);
  })

});

/*router.get('cars/text/:text', function (req, res, next) {
  commentsDAO.getCommentCarsByText(req.params.text, function (results) {
    res.send(results);
  })
});

router.get('cars/name/:text', function (req, res, next) {
  commentsDAO.getCommentCarsByCar(req.params.text, function (results) {
    res.send(results);
  })
});

router.get('cars/type/:text', function (req, res, next) {
  commentsDAO.getCommentCarsByCarType(req.params.text, function (results) {
    res.send(results);
  })
});*/

router.post('/', function (req, res, next) {
  commentsDAO.insertComment(req.body, function (result) {
      res.send(result);
  })
});

router.put('/', function (req, res, next) {
  commentsDAO.updateComment(req.body, function (result) {
      res.send(result);
  })
});

router.delete('/', function (req, res, next) {
  commentsDAO.deleteComment(req.body, function (result) {
      res.send(result);
  })
});



/*router.get('/', function(req, res, next) {
    res.render('text', {text: 'Comentario'});
});*/


module.exports = router;