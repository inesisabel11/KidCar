var mysql = require('./mysqlConn').pool;

exports.getAll = function (callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            console.log(err);
            conn.release();
            next(err);
        }
        else conn.query("SELECT user_id, user_name, user_phone, user_country_id, country_name, user_nif, login_id, login_email, login_password, user_type.user_type_id FROM users, countries, login, user_type WHERE (user_country_id = country_id) AND (user_id_login = login_id) AND (user_type.user_type_id = login.user_type_id);", function (err, rows) // Vai buscar todos os users
        {
            conn.release(); callback(rows);
        })
    })
}

exports.getById = function (userId, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT user_id, user_name, user_phone, user_country_id, country_name, user_nif, login_id, login_email, login_password, user_type.user_type_id FROM users, countries, login, user_type WHERE (user_country_id = country_id) AND (user_id_login = login_id) AND (user_type.user_type_id = login.user_type_id) AND (user_id = ?);", [userId], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getByName = function (procurar, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            if (conn) conn.release();
            next(err);
        }
        else conn.query("SELECT user_id, user_name, user_phone, user_country_id, country_name, user_nif, login_id, login_email, login_password, user_type.user_type_id FROM users, countries, login, user_type WHERE (user_country_id = country_id) AND (user_id_login = login_id) AND (user_type.user_type_id = login.user_type_id) AND (user_name LIKE ?);", "%" + [procurar] + "%", function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getByPhone = function (procurar, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            if (conn) conn.release();
            next(err);
        }
        else conn.query("SELECT user_id, user_name, user_phone, user_country_id, country_name, user_nif, login_id, login_email, login_password, user_type.user_type_id FROM users, countries, login, user_type WHERE (user_country_id = country_id) AND (user_id_login = login_id) AND (user_type.user_type_id = login.user_type_id) AND (user_phone LIKE ?);", "%" + [procurar] + "%", function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getByCountry = function (procurar, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            if (conn) conn.release();
            next(err);
        }
        else conn.query("SELECT user_id, user_name, user_phone, user_country_id, country_name, user_nif, login_id, login_email, login_password, user_type.user_type_id FROM users, countries, login, user_type WHERE (user_country_id = country_id) AND (user_id_login = login_id) AND (user_type.user_type_id = login.user_type_id) AND (country_name LIKE ?);", "%" + [procurar] + "%", function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getByNIF = function (procurar, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            if (conn) conn.release();
            next(err);
        }
        else conn.query("SELECT user_id, user_name, user_phone, user_country_id, country_name, user_nif, login_id, login_email, login_password, user_type.user_type_id FROM users, countries, login, user_type WHERE (user_country_id = country_id) AND (user_id_login = login_id) AND (user_type.user_type_id = login.user_type_id) AND (user_nif LIKE ?);", "%" + [procurar] + "%", function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getByEmail = function (procurar, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            if (conn) conn.release();
            next(err);
        }
        else conn.query("SELECT user_id, user_name, user_phone, user_country_id, country_name, user_nif, login_id, login_email, login_password, user_type.user_type_id FROM users, countries, login, user_type WHERE (user_country_id = country_id) AND (user_id_login = login_id) AND (user_type.user_type_id = login.user_type_id) AND (login_email LIKE ?);", "%" + [procurar] + "%", function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.insertUser = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("INSERT INTO users (user_name, user_phone, user_country_id, user_nif, user_id_login) VALUES (?,?,?,?,?)", [obj.user_name, obj.user_phone, obj.user_country_id, obj.user_nif, obj.user_login_id], function (err, rows) {
            console.log(err);
            console.log(rows)
            conn.release(); callback(rows);
        })

    })
}

exports.updateUser = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("UPDATE users SET user_name = ?, user_phone = ?, user_country_id = ?, user_nif = ?, user_id_login = ? WHERE user_id = ?;", [obj.user_name, obj.user_phone, obj.user_country_id, obj.user_nif, obj.user_id_login, obj.user_id], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.deleteUser = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("DELETE FROM users WHERE user_id = ?", [obj.user_id], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}