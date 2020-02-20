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
        else conn.query("SELECT DISTINCT rent_id, rent_date_start AS inicio, rent_date_end AS fim, user_name, car_id, car_name, type_car_description FROM rents, rents_cars, rents_user, users, cars, type_cars WHERE (rent_id = rent_car_rent_id) AND (rent_id = rent_user_rent_id) AND (rent_car_car_id = car_id) AND (car_type_car_id = type_car_id) AND (user_id = rent_user_user_id);", function(err, rows)
        {
            conn.release(); callback(rows);
        })
    })
}

exports.getByUserId = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT DISTINCT rent_id, rent_date_start AS inicio, rent_date_end AS fim, user_name, car_id, car_name, type_car_description FROM rents, rents_cars, rents_user, users, cars, type_cars WHERE (rent_id = rent_car_rent_id) AND (rent_id = rent_user_rent_id) AND (rent_car_car_id = car_id) AND (car_type_car_id = type_car_id) AND (user_id = rent_user_user_id) AND (user_id = ?);", [obj.user], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getUserRentByCarName = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT DISTINCT rent_id, rent_date_start AS inicio, rent_date_end AS fim, user_name, car_id, car_name, type_car_description FROM rents, rents_cars, rents_user, users, cars, type_cars WHERE (rent_id = rent_car_rent_id) AND (rent_id = rent_user_rent_id) AND (rent_car_car_id = car_id) AND (car_type_car_id = type_car_id) AND (user_id = rent_user_user_id) AND (user_id = ?) AND (car_name LIKE ?);", [obj.user, "%" + obj.car + "%"], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getUserRentByCarType = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT DISTINCT rent_id, rent_date_start AS inicio, rent_date_end AS fim, user_name, car_id, car_name, type_car_description FROM rents, rents_cars, rents_user, users, cars, type_cars WHERE (rent_id = rent_car_rent_id) AND (rent_id = rent_user_rent_id) AND (rent_car_car_id = car_id) AND (car_type_car_id = type_car_id) AND (user_id = rent_user_user_id) AND (user_id = ?) AND (type_car_description LIKE ?);", [obj.user, "%" + obj.type + "%"], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getUserRentByDate = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT DISTINCT rent_id, rent_date_start AS inicio, rent_date_end AS fim, user_name, car_id, car_name, type_car_description FROM rents, rents_cars, rents_user, users, cars, type_cars WHERE (rent_id = rent_car_rent_id) AND (rent_id = rent_user_rent_id) AND (rent_car_car_id = car_id) AND (car_type_car_id = type_car_id) AND (user_id = rent_user_user_id) AND (user_id = ?) AND (? BETWEEN rent_date_start AND rent_date_end);", [obj.user, obj.date], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getUserRentByCarNameAndType = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT DISTINCT rent_id, rent_date_start AS inicio, rent_date_end AS fim, user_name, car_id, car_name, type_car_description FROM rents, rents_cars, rents_user, users, cars, type_cars WHERE (rent_id = rent_car_rent_id) AND (rent_id = rent_user_rent_id) AND (rent_car_car_id = car_id) AND (car_type_car_id = type_car_id) AND (user_id = rent_user_user_id) AND (user_id = ?) AND (car_name LIKE ?) AND (type_car_description LIKE ?);", [obj.user, "%" + obj.car + "%", "%" + obj.type + "%"], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getUserRentByCarNameAndDate = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT DISTINCT rent_id, rent_date_start AS inicio, rent_date_end AS fim, user_name, car_id, car_name, type_car_description FROM rents, rents_cars, rents_user, users, cars, type_cars WHERE (rent_id = rent_car_rent_id) AND (rent_id = rent_user_rent_id) AND (rent_car_car_id = car_id) AND (car_type_car_id = type_car_id) AND (user_id = rent_user_user_id) AND (user_id = ?) AND (car_name LIKE ?) AND (? BETWEEN rent_date_start AND rent_date_end);", [obj.user, "%" + obj.car + "%", obj.date], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getUserRentByCarNameAndDate = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT DISTINCT rent_id, rent_date_start AS inicio, rent_date_end AS fim, user_name, car_id, car_name, type_car_description FROM rents, rents_cars, rents_user, users, cars, type_cars WHERE (rent_id = rent_car_rent_id) AND (rent_id = rent_user_rent_id) AND (rent_car_car_id = car_id) AND (car_type_car_id = type_car_id) AND (user_id = rent_user_user_id) AND (user_id = ?) AND (type_car_description LIKE ?) AND (? BETWEEN rent_date_start AND rent_date_end);", [obj.user, "%" + obj.type + "%", obj.date], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getUserRentByAll = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT DISTINCT rent_id, rent_date_start AS inicio, rent_date_end AS fim, user_name, car_id, car_name, type_car_description FROM rents, rents_cars, rents_user, users, cars, type_cars WHERE (rent_id = rent_car_rent_id) AND (rent_id = rent_user_rent_id) AND (rent_car_car_id = car_id) AND (car_type_car_id = type_car_id) AND (user_id = rent_user_user_id) AND (user_id = ?) AND (car_name LIKE ?) AND (type_car_description LIKE ?) AND (? BETWEEN rent_date_start AND rent_date_end);", [obj.user, "%" + obj.car + "%", "%" + obj.type + "%", obj.date], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getByUserName = function (user, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT rent_id, rent_date_start AS inicio, rent_date_end AS fim, user_name, car_name, type_car_description FROM rents, rents_cars, rents_user, users, cars, type_cars WHERE (rent_id = rent_car_rent_id) AND (rent_id = rent_user_rent_id) AND (rent_car_car_id = car_id) AND (car_type_car_id = type_car_id) AND (user_id = rent_user_user_id) AND (user_name LIKE ?);", "%" + [user] + "%", function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getByCarName = function (car, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT rent_id, rent_date_start AS inicio, rent_date_end AS fim, user_name, car_name, type_car_description FROM rents, rents_cars, rents_user, users, cars, type_cars WHERE (rent_id = rent_car_rent_id) AND (rent_id = rent_user_rent_id) AND (rent_car_car_id = car_id) AND (car_type_car_id = type_car_id) AND (user_id = rent_user_user_id) AND (car_name LIKE ?);", "%" + [car] + "%", function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getByCarType = function (type, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT rent_id, rent_date_start AS inicio, rent_date_end AS fim, user_name, car_name, type_car_description FROM rents, rents_cars, rents_user, users, cars, type_cars WHERE (rent_id = rent_car_rent_id) AND (rent_id = rent_user_rent_id) AND (rent_car_car_id = car_id) AND (car_type_car_id = type_car_id) AND (user_id = rent_user_user_id) AND (type_car_description LIKE ?);", "%" + [type] + "%", function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getNumberOfCarRentsByDate = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT COUNT(DISTINCT rent_id) AS 'count' FROM rents, rents_cars WHERE (rent_car_car_id = ?) AND ((? BETWEEN rent_date_start AND rent_date_end) OR (? BETWEEN rent_date_start AND rent_date_end));",[obj.car, obj.start, obj.end], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getMaxRentId = function (callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT MAX(rent_id) as max FROM rents", function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.insertRent = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("INSERT INTO rents (rent_date_start, rent_date_end) VALUES (?,?)", [obj.rent_date_start, obj.rent_date_end], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.insertRentToUser = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("INSERT INTO rents_user (rent_user_user_id, rent_user_rent_id) VALUES (?,?)", [obj.rent_user_user_id, obj.rent_user_rent_id], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.insertRentOfCar = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("INSERT INTO rents_cars (rent_car_car_id, rent_car_rent_id) VALUES (?,?)", [obj.rent_car_car_id, obj.rent_car_rent_id], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.updateRent = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("UPDATE rents SET rent_date_start = ?, rent_date_end = ? WHERE rent_id = ?", [obj.rent_date_start, obj.rent_date_end, obj.rent_id], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.updateRentToUser = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("UPDATE rents_user SET rent_user_user_id = ? WHERE rent_user_rent_id = ?", [obj.rent_user_user_id, obj.rent_user_rent_id], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.updateRentOfCar = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("UPDATE rents_cars SET rent_car_car_id = ? WHERE rent_car_rent_id = ?", [obj.rent_car_car_id, obj.rent_car_rent_id], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.deleteRent = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("DELETE FROM rents WHERE rent_id = ?", [obj.rent_id], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.deleteRentFromUser = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("DELETE FROM rents_user WHERE rent_user_rent_id = ?", [obj.rent_user_rent_id], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.deleteRentFromCar = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("DELETE FROM rents_cars WHERE rent_car_rent_id = ?", [obj.rent_car_rent_id], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

