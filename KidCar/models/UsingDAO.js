var express = require("express");
var router = express.Router();
var registroDAO = require(".");

/* GET All group*/
router.get('/groups/:group', function(req, res, next)
{
    registroDAO.listAllGroup(req.params.group,function(result) 
    {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.send(result);
    },next)
});

/* POST */
router.post('/', function(req, res, next) 
{
    var registro = req.body;
    // Verificar os dados do registro
    registroDAO.register(registro, function(result) 
    {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.send(result);
    },next);
});