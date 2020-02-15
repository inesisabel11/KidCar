var mysql = require('./mysqlConn').pool;

exports.getAll = function(callback, next)
{
    mysql.getConnection(function(err, conn)
    {
        if(err)
        {
            conn.release();
            next(err);
        }
        else conn.query("select * from countries", function(err, rows) // Vai buscar todos os users
        {
            conn.release(); callback(rows);
        })
    })
}

exports.getByCountryName = function(countryName, callback, next)
{
    mysql.getConnection(function(err, conn)
    {
        if(err)
        {
            conn.release();
            next(err);
        }
        else conn.query("select country_id, country_name from countries where country_name like ?", ["%"+countryName+"%"], function(err, rows) // vai buscar os users por um campo
        {
            conn.release();callback(rows);
        })
    })
}

exports.getById = function (countryId, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT country_id, country_name, user_name FROM countries, users WHERE (user_nome = user_id) AND (country_id = ?);", [countryId], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.insertCountry = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("INSERT INTO countries (country_name) VALUES (?)", [obj.country_name], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.updateCountry = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("UPDATE countries SET country_name = ? WHERE country_id = ?;", [obj.country_name, obj.country_id], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.deleteCountry = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("DELETE FROM countries WHERE country_id = ?", [obj.country_id], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}