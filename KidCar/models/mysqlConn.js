var mysql = require('mysql');

var pool = mysql.createPool({
  host: "remotemysql.com",
  user: "4z6BwNz4Is",
  password: "cGCQcsYHZt",
  database: "4z6BwNz4Is"
});

exports.pool = pool;
