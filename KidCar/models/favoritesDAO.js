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
        else conn.query("SELECT favorite_id, car_id, car_name, color_name, type_car_description, user_id, user_name, user_phone from favorites, cars, users, type_cars, car_colors WHERE (car_color_id = color_id) AND  (car_type_car_id = type_car_id) AND (favorite_car_id = car_id) AND (favorite_user_id = user_id);", function(err, rows)
        {
            conn.release(); callback(rows);
        })
    })
}

exports.getFavoritesTotal = function (id, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            if (conn) conn.release();
            next(err);
        }
        else conn.query("SELECT COUNT(favorite_id) as total FROM favorites WHERE favorite_user_id = ?;", [id], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getUserFavorites = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT favorite_id, car_id, car_name, color_name, type_car_description, user_id, user_name, user_phone from favorites, cars, users, type_cars, car_colors WHERE (car_color_id = color_id) AND  (car_type_car_id = type_car_id) AND (favorite_car_id = car_id) AND (favorite_user_id = user_id) AND (user_id = ?);", [obj.user], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getUserFavoriteByCarId = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT favorite_id, car_id, car_name, color_name, type_car_description, user_id, user_name, user_phone from favorites, cars, users, type_cars, car_colors WHERE (car_color_id = color_id) AND  (car_type_car_id = type_car_id) AND (favorite_car_id = car_id) AND (favorite_user_id = user_id) AND (user_id = ?) AND (car_id = ?);", [obj.user, obj.car], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getUserFavoriteByCar = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT favorite_id, car_id, car_name, color_name, type_car_description, user_id, user_name, user_phone from favorites, cars, users, type_cars, car_colors WHERE (car_color_id = color_id) AND  (car_type_car_id = type_car_id) AND (favorite_car_id = car_id) AND (favorite_user_id = user_id) AND (user_id = ?) AND (car_name LIKE ?);", [obj.user, "%" + [obj.car] + "%"], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getUserFavoriteByType = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT favorite_id, car_id, car_name, color_name, type_car_description, user_id, user_name, user_phone from favorites, cars, users, type_cars, car_colors WHERE (car_color_id = color_id) AND  (car_type_car_id = type_car_id) AND (favorite_car_id = car_id) AND (favorite_user_id = user_id) AND (user_id = ?) AND (type_car_description LIKE ?);", [obj.user, "%" + [obj.type] + "%"], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getUserFavoriteByColor = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT favorite_id, car_id, car_name, color_name, type_car_description, user_id, user_name, user_phone from favorites, cars, users, type_cars, car_colors WHERE (car_color_id = color_id) AND  (car_type_car_id = type_car_id) AND (favorite_car_id = car_id) AND (favorite_user_id = user_id) AND (user_id = ?) AND (color_name LIKE ?);", [obj.user, "%" + [obj.color] + "%"], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getUserFavoriteByCarAndType = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT favorite_id, car_id, car_name, color_name, type_car_description, user_id, user_name, user_phone from favorites, cars, users, type_cars, car_colors WHERE (car_color_id = color_id) AND  (car_type_car_id = type_car_id) AND (favorite_car_id = car_id) AND (favorite_user_id = user_id) AND (user_id = ?) AND (car_name LIKE ?) AND (type_car_description LIKE ?);", [obj.user, "%" + [obj.car] + "%", "%" + [obj.type] + "%"], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getUserFavoriteByTypeAndColor = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT favorite_id, car_id, car_name, color_name, type_car_description, user_id, user_name, user_phone from favorites, cars, users, type_cars, car_colors WHERE (car_color_id = color_id) AND  (car_type_car_id = type_car_id) AND (favorite_car_id = car_id) AND (favorite_user_id = user_id) AND (user_id = ?) AND (color_name LIKE ?) AND (type_car_description LIKE ?);", [obj.user, "%" + [obj.color] + "%", "%" + [obj.type] + "%"], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getUserFavoriteByCarAndColor = function (obj , callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT favorite_id, car_id, car_name, color_name, type_car_description, user_id, user_name, user_phone from favorites, cars, users, type_cars, car_colors WHERE (car_color_id = color_id) AND  (car_type_car_id = type_car_id) AND (favorite_car_id = car_id) AND (favorite_user_id = user_id) AND (user_id = ?) AND (car_name LIKE ?) AND (color_name LIKE ?);", [obj.user, "%" + [obj.car] + "%", "%" + [obj.color] + "%"], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getUserFavoriteByAll = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT favorite_id, car_id, car_name, color_name, type_car_description, user_id, user_name, user_phone from favorites, cars, users, type_cars, car_colors WHERE (car_color_id = color_id) AND  (car_type_car_id = type_car_id) AND (favorite_car_id = car_id) AND (favorite_user_id = user_id) AND (user_id = ?) AND (car_name LIKE ?) AND (type_car_description LIKE ?) AND (color_name LIKE ?);", [obj.user, "%" + [obj.car] + "%", "%" + [obj.type] + "%", "%" + [obj.color] + "%"], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getByUser = function(userName, callback, next)
{
    mysql.getConnection(function(err, conn)
    {
        if(err)
        {
            conn.release();
            next(err);
        }
        else conn.query("SELECT favorite_id, car_id, car_name, color_name, type_car_description, user_id, user_name, user_phone from favorites, cars, users, type_cars, car_colors WHERE (car_color_id = color_id) AND  (car_type_car_id = type_car_id) AND (favorite_car_id = car_id) AND (favorite_user_id = user_id) AND (user_name LIKE ?);", "%" + [userName] + "%", function(err, rows)
        {
            conn.release();callback(rows);
        })
    })
}

exports.getByCar = function (carName, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT favorite_id, car_id, car_name, color_name, type_car_description, user_id, user_name, user_phone from favorites, cars, users, type_cars, car_colors WHERE (car_color_id = color_id) AND  (car_type_car_id = type_car_id) AND (favorite_car_id = car_id) AND (favorite_user_id = user_id) AND (car_name LIKE ?);", "%" + [carName] + "%", function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getByCarType = function (carType, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT favorite_id, car_id, car_name, color_name, type_car_description, user_id, user_name, user_phone from favorites, cars, users, type_cars, car_colors WHERE (car_color_id = color_id) AND  (car_type_car_id = type_car_id) AND (favorite_car_id = car_id) AND (favorite_user_id = user_id) AND (type_car_description LIKE ?);", "%" + [carType] + "%", function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getByCarColor = function (carColor, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT favorite_id, car_id, car_name, color_name, type_car_description, user_id, user_name, user_phone from favorites, cars, users, type_cars, car_colors WHERE (car_color_id = color_id) AND  (car_type_car_id = type_car_id) AND (favorite_car_id = car_id) AND (favorite_user_id = user_id) AND (color_name LIKE ?);", "%" + [carColor] + "%", function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.insertFavorite = function(obj, callback,next) 
{
    mysql.getConnection(function(err, conn)
    {
        if (err) 
        {
            conn.release(); 
            next(err); 
        }
        else conn.query("INSERT INTO favorites(favorite_user_id, favorite_car_id) VALUES (?,?)", [obj.favorite_user_id , obj.favorite_car_id] , function(err, rows) 
        {
            conn.release(); callback(rows);
        }) 
    }) 
}

exports.updateFavorite = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("UPDATE favorites SET favorite_user_id = ?, favorite_car_id = ? WHERE favorite_id = ?", [obj.favorite_user_id , obj.favorite_car_id, obj.favorite_id], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.deleteFavorite = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("DELETE FROM favorites WHERE favorite_id = ?", [obj.favorite_id], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.deleteFavoriteCar = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("DELETE FROM favorites WHERE (favorite_user_id = ?) AND (favorite_car_id = ?)", [obj.favorite_user_id, obj.favorite_car_id], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}
