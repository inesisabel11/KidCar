var mysql = require('mysql');

var pool = mysql.createPool({
  host: "db4free.net",
  user: "kidcar",
  password: "kidcarteste",
  database: "kidcar"
});

exports.pool = pool;
