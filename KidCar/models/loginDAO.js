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
        else conn.query("select * from login", function(err, rows) // Vai buscar todos os users
        {
            conn.release(); callback(rows);
        })
    })
}

exports.getByEmailAndPassword = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT user_name, user_id FROM login, users WHERE (login_id = user_id_login) AND (login_email = ?) AND (login_password = ?);", [obj.email, obj.password], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getLoginMaxId = function (callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            if (conn) conn.release();
            next(err);
        }
        else conn.query("SELECT MAX(login_id) as 'max' FROM login;", function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.insertLogin = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("INSERT INTO login (login_email, login_password, user_type_id) VALUES (?,?,?)", [obj.login_email, obj.login_password, obj.user_type_id], function (err, rows) {
            conn.release(); callback(rows);
        })

    })
}

exports.updateLogin = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("UPDATE login SET login_email = ?, login_password = ?, user_type_id = ? WHERE login_id = ?;", [obj.login_email, obj.login_password, obj.user_type_id, obj.login_id], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.deleteLogin = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("DELETE FROM login WHERE login_id = ?", [obj.login_id], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getAllUserTypes = function(callback, next)
{
    mysql.getConnection(function(err, conn)
    {
        if(err)
        {
            conn.release();
            next(err);
        }
        else conn.query("select * from user_type", function(err, rows) // Vai buscar todos os users
        {
            conn.release(); callback(rows);
        })
    })
}

exports.getUserTypeByDescription = function (procurar, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            if (conn) conn.release();
            next(err);
        }
        else conn.query("SELECT * FROM user_type WHERE (user_type_desc LIKE ?);", "%" + [procurar] + "%", function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.insertUserType = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("INSERT INTO user_type (user_type_desc) values (?);", [obj.user_type_desc], function (err, rows) {
            conn.release(); callback(rows);
        })

    })
}

exports.updateUserType = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("UPDATE user_type SET user_type_desc = ? WHERE user_type_id = ?;", [obj.user_type_desc, obj.user_type_id], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.deleteUserType = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("DELETE FROM user_type WHERE user_type_id = ?", [obj.user_type_id], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}
