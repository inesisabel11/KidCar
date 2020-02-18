var mysql = require('./mysqlConn').pool;

exports.getAll = function (callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            if (conn) conn.release();
            next(err);
        }
        else conn.query("SELECT car_id, color_id, color_name, car_name, type_car_id, type_car_description, id_location, data, latitude, longitude FROM cars, type_cars, car_colors, location WHERE (id_carro = car_id) AND (data IN (SELECT MAX(data) FROM location GROUP BY id_carro)) AND (car_type_car_id = type_car_id) AND (car_color_id = color_id);", function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getCarTotal = function (callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            if (conn) conn.release();
            next(err);
        }
        else conn.query("SELECT COUNT(car_id) as total FROM cars;", function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getByTypeAndColor = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT car_id, color_id, color_name, car_name, type_car_id, type_car_description, id_location, data, latitude, longitude FROM cars, type_cars, car_colors, location WHERE (id_carro = car_id) AND (data IN (SELECT MAX(data) FROM location GROUP BY id_carro)) AND (car_type_car_id = type_car_id) AND (car_color_id = color_id) AND (type_car_description LIKE ?) AND (color_name LIKE ?);", [ "%" + obj.type + "%", "%" + obj.color + "%"], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getByNameAndColor = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT car_id, color_id, color_name, car_name, type_car_id, type_car_description, id_location, data, latitude, longitude FROM cars, type_cars, car_colors, location WHERE (id_carro = car_id) AND (data IN (SELECT MAX(data) FROM location GROUP BY id_carro)) AND (car_type_car_id = type_car_id) AND (car_color_id = color_id) AND (car_name LIKE ?) AND (color_name LIKE ?);", [ "%" + obj.name + "%", "%" + obj.color + "%"], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getByNameAndType = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT car_id, color_id, color_name, car_name, type_car_id, type_car_description, id_location, data, latitude, longitude FROM cars, type_cars, car_colors, location WHERE (id_carro = car_id) AND (data IN (SELECT MAX(data) FROM location GROUP BY id_carro)) AND (car_type_car_id = type_car_id) AND (car_color_id = color_id) AND (car_name LIKE ?) AND (type_car_description LIKE ?);", [ "%" + obj.name + "%", "%" + obj.type + "%"], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getByAll = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT car_id, color_id, color_name, car_name, type_car_id, type_car_description, id_location, data, latitude, longitude FROM cars, type_cars, car_colors, location WHERE (id_carro = car_id) AND (data IN (SELECT MAX(data) FROM location GROUP BY id_carro)) AND (car_type_car_id = type_car_id) AND (car_color_id = color_id) AND (car_name LIKE ?) AND (type_car_description LIKE ?) AND (color_name LIKE ?);", [ "%" + obj.name + "%", "%" + obj.type + "%", "%" + obj.color + "%"], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}


exports.getById = function (carId, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT car_id, color_id, color_name, car_name, type_car_id, type_car_description, id_location, data, latitude, longitude FROM cars, type_cars, car_colors, location WHERE (id_carro = car_id) AND (data IN (SELECT MAX(data) FROM location GROUP BY id_carro)) AND (car_type_car_id = type_car_id) AND (car_color_id = color_id) AND (car_id = ?);", [carId], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getByType = function (carType, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT car_id, color_id, color_name, car_name, type_car_id, type_car_description, id_location, data, latitude, longitude FROM cars, type_cars, car_colors, location WHERE (id_carro = car_id) AND (data IN (SELECT MAX(data) FROM location GROUP BY id_carro)) AND (car_type_car_id = type_car_id) AND (car_color_id = color_id) AND (type_car_description LIKE ?);", "%" + [carType] + "%", function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getByColor = function (carColor, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT car_id, color_id, color_name, car_name, type_car_id, type_car_description, id_location, data, latitude, longitude FROM cars, type_cars, car_colors, location WHERE (id_carro = car_id) AND (data IN (SELECT MAX(data) FROM location GROUP BY id_carro)) AND (car_type_car_id = type_car_id) AND (car_color_id = color_id) AND (color_name LIKE ?);", "%" + [carColor] + "%", function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}


exports.getByName = function (carName, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT car_id, color_id, color_name, car_name, type_car_id, type_car_description, id_location, data, latitude, longitude FROM cars, type_cars, car_colors, location WHERE (id_carro = car_id) AND (data IN (SELECT MAX(data) FROM location GROUP BY id_carro)) AND (car_type_car_id = type_car_id) AND (car_color_id = color_id) AND (car_name LIKE ?);", "%" + [carName] + "%", function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getCarTypes = function (callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT type_car_id, type_car_description FROM type_cars;", function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getCarTypesByDescription = function (description, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT type_car_id, type_car_description FROM type_cars WHERE (type_car_description LIKE ?);", "%" + [description] + "%", function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getAllCarColors = function (callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT color_id, color_name FROM car_colors;", function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.getCarColorsByName = function (color, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("SELECT color_id, color_name FROM car_colors WHERE (color_name LIKE ?);", "%" + [color] + "%", function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.insertCar = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("INSERT INTO cars (car_color_id, car_name, car_type_car_id) VALUES (?,?,?)", [obj.car_color_id, obj.car_name, obj.car_type_car_id], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.updateCar = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("UPDATE cars SET car_color_id = ?, car_name = ?, car_type_car_id = ? WHERE car_id = ?;", [obj.car_color_id, obj.car_name, obj.car_type_car_id, obj.car_id], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.deleteCar = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("DELETE FROM cars WHERE car_id = ?", [obj.car_id], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.insertType = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("INSERT INTO type_cars (type_car_description) VALUES (?)", [obj.type_car_description], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.updateType = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("UPDATE type_cars SET type_car_description = ? WHERE  type_car_id = ?;", [obj.type_car_description, obj.type_car_id], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.deleteType = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("DELETE FROM type_cars WHERE type_car_id = ?", [obj.type_car_id], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.insertColor = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("INSERT INTO car_colors (color_name) VALUES (?)", [obj.color_name], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.updateColor = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("UPDATE car_colors SET color_name = ? WHERE color_id = ?;", [obj.color_name, obj.color_id], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}

exports.deleteColor = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("DELETE FROM car_colors WHERE color_id = ?", [obj.color_id], function (err, rows) {
            conn.release(); callback(rows);
        })
    })
}
