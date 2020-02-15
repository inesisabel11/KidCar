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
        else conn.query("SELECT comment_id, comment_text, comment_date AS date, user_id, user_name FROM comments, users WHERE (user_id = comment_user_id)", function(err, rows) // Vai buscar todos os users
        {
            conn.release(); callback(rows);
        })
    })
}

exports.getByCommentText = function(commentText, callback, next)
{
    mysql.getConnection(function(err, conn)
    {
        if(err)
        {
            conn.release();
            next(err);
        }
        else conn.query("SELECT comment_id, comment_text, comment_date AS date, user_id, user_name FROM comments, users WHERE (user_id = comment_user_id) AND (comment_text like ?)", ["%"+commentText+"%"], function(err, rows) // vai buscar os comments por um campo
        {
            conn.release();callback(rows);
        })
    })
}

exports.getByCommentData = function(commentData, callback, next)
{
    mysql.getConnection(function(err, conn)
    {
        if(err)
        {
            conn.release();
            next(err);
        }
        else conn.query("SELECT comment_id, comment_text, comment_date AS date, user_id, user_name FROM comments, users WHERE (user_id = comment_user_id) AND (comment_date like ?)", ["%"+commentData+"%"], function(err, rows) // vai buscar os comments por um campo
        {
            conn.release();callback(rows);
        })
    })
}

exports.getByUserId = function(id, callback, next)
{
    mysql.getConnection(function(err, conn)
    {
        if(err)
        {
            conn.release();
            next(err);
        }
        else conn.query("SELECT comment_id, comment_text, comment_date AS date, user_id, user_name FROM comments, users WHERE (user_id = comment_user_id) AND (comment_user_id = ?);", [id], function(err, rows) // vai buscar os comments por um campo
        {
            conn.release();callback(rows);
        })
    })
}

exports.getByUserName = function (name, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT comment_id, comment_text, comment_date AS date, user_id, user_name FROM comments, users WHERE (user_id = comment_user_id) AND (user_name LIKE ?);", ["%" + name + "%"], function (err, rows) // vai buscar os comments por um campo
        {
            conn.release(); callback(rows);
        })
    })
}

exports.getByDate = function (date, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SSELECT comment_id, comment_text, comment_date AS date, user_id, user_name FROM comments, users WHERE (user_id = comment_user_id) AND (comment_date LIKE ?);", ["%" + date + "%"], function (err, rows) // vai buscar os comments por um campo
        {
            conn.release(); callback(rows);
        })
    })
}

exports.getCarComments = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT comment_car_id, comment_car_text, car_id, car_name, comment_car_date AS date,user_id, user_name FROM comments_cars, users, cars WHERE (comment_car_car_id = car_id) AND (user_id = comment_car_user_id) AND (car_id = ?);", [obj.id], function (err, rows) // Vai buscar todos os users
        {
            conn.release(); callback(rows);
        })
    })
}

/*exports.getCommentCarsByText = function (commentCar, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT comment_car_id, comment_car_text, car_name, type_car_description, comment_car_date AS date, user_name FROM comments_cars, users, cars, type_cars WHERE (comment_car_car_id = car_id) AND (user_id = comment_car_user_id) AND (type_car_id = car_type_car_id), (comment_car_text LIKE ?)", ["%" + commentCar + "%"], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getCommentCarsByCar = function (carName, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT comment_car_id, comment_car_text, car_name, type_car_description, comment_car_date AS date, user_name FROM comments_cars, users, cars, type_cars WHERE (comment_car_car_id = car_id) AND (user_id = comment_car_user_id) AND (type_car_id = car_type_car_id, (car_name LIKE ?)", ["%" + carName + "%"], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getCommentCarsByCarType = function (carType, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT comment_car_id, comment_car_text, car_name, type_car_description, comment_car_date AS date, user_name FROM comments_cars, users, cars, type_cars WHERE (comment_car_car_id = car_id) AND (user_id = comment_car_user_id) AND (type_car_id = car_type_car_id), (type_car_description LIKE ?)", ["%" + carType + "%"], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}*/

exports.getById = function (commentId, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT comment_id, comment_text, comment_date AS date, user_id, user_name FROM comments, users WHERE (user_nome = user_id) AND (comment_id = ?);", [commentId], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.insertComment = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("INSERT INTO comments (comment_text, comment_user_id, comment_date) VALUES (?,?,?)", [obj.comment_text, obj.comment_user_id, obj.comment_date], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.updateComment = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("UPDATE comments SET comment_text = ?, comment_user_id = ?, comment_date = ? WHERE comment_id = ?;", [obj.comment_text, obj.comment_user_id, obj.comment_date, obj.comment_id], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.deleteComment = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("DELETE FROM comments WHERE comment_id = ?", [obj.comment_id], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}