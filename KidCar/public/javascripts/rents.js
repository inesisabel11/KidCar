function insertRents() {
    if (confirm("Inserir Aluguer?")) {
        $.ajax({
            url: "https://kidcar.herokuapp.com/api/rents",  // the local Node server
            data: JSON.stringify({
                "rent_date_start": document.getElementById('addStart').value,
                "rent_date_end": document.getElementById('addEnd').value
            }),
            method: 'POST',
            contentType: 'application/json',
            success: function () {
                getMaxRentId();
            }
        });
    }
}

function insertRentToUser(idRent) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/rents/users/",  // the local Node server
        data: JSON.stringify({
            "rent_user_user_id": document.getElementById('selectUser').options[document.getElementById('selectUser').selectedIndex].value,
            "rent_user_rent_id": idRent
        }),
        method: 'POST',
        contentType: 'application/json',
        success: function () {
            insertRentOfCar(idRent);
        }
    });
}

function insertRentOfCar(idRent) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/rents/cars/",  // the local Node server
        data: JSON.stringify({
            "rent_car_car_id": document.getElementById('selectCar').options[document.getElementById('selectCar').selectedIndex].value,
            "rent_car_rent_id": idRent
        }),
        method: 'POST',
        contentType: 'application/json',
        success: function () {
            window.location.href = "rents.html";
        }
    });
}

function getMaxRentId() {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/rents/maxId/",  // the local Node server
        method: 'GET',
        success: function (data) {
            for (x in data)
                insertRentToUser(data[x].max);
        }
    });
}

function updateRent(id) {
    if (confirm("Guardar Alterações?")) {
        $.ajax({
            url: "https://kidcar.herokuapp.com/api/rents",  // the local Node server
            data: JSON.stringify({
                "rent_date_start": document.getElementById('updateStart').value,

                "rent_date_end": document.getElementById('updateEnd').value,

                "rent_id": id
            }),
            method: 'PUT',
            contentType: 'application/json',
            success: function () {
                updateRentToUser(id);
            }
        });
    }
}

function updateRentToUser(id) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/rents/users/",  // the local Node server
        data: JSON.stringify({
            "rent_user_user_id" : document.getElementById('selectUser').options[document.getElementById('selectUser').selectedIndex].value,
            
            "rent_user_rent_id": id 

            }),
        method: 'PUT',
        contentType: 'application/json',
        success: function () {
            updateRentOfCar(id);
        }
    });
}

function updateRentOfCar(id) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/rents/cars/",  // the local Node server
        data: JSON.stringify({
            "rent_car_car_id" : document.getElementById('selectCar').options[document.getElementById('selectCar').selectedIndex].value,
            
            "rent_car_rent_id": id 

            }),
        method: 'PUT',
        contentType: 'application/json',
        success: function () {
            window.location.href = "rents.html";
        }
    });
}

function deleteRent(id) {
        $.ajax({
            url: "https://kidcar.herokuapp.com/api/rents/",  // the local Node server
            data: JSON.stringify({ "rent_id": id }),
            method: 'DELETE',
            contentType: 'application/json',
            success: function () {
            }
        });
}

function deleteRentFromUser(id) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/rents/users/",  // the local Node server
        data: JSON.stringify({ "rent_user_rent_id": id }),
        method: 'DELETE',
        contentType: 'application/json',
        success: function () {
        }
    });
}

function deleteRentFromCar(id) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/rents/cars/",  // the local Node server
        data: JSON.stringify({ "rent_car_rent_id": id }),
        method: 'DELETE',
        contentType: 'application/json',
        success: function () {
        }
    });
}

function deleteRents(id)
{
    if (confirm("Eliminar Aluguer?")) {
        deleteRentFromUser(id);
        deleteRentFromCar(id);
        deleteRent(id);
        window.location.href = "rents.html";
    }
}

function pesquisarAlugueres() {

    document.getElementById("mostrarElementos").innerHTML = "";

    var opcao = document.getElementById("pesquisarAlugueresPor");
    var pesquisar = opcao.options[opcao.selectedIndex].value;

    if (pesquisar == "utilizador")
        verUtilizador(document.getElementById("txtPesquisaAlugueres").value);
    else if (pesquisar == "carro")
        verCarro(document.getElementById("txtPesquisaAlugueres").value);
    else if (pesquisar == "tipo")
        verTipo(document.getElementById("txtPesquisaAlugueres").value);
}

function verTodos() {

    document.getElementById("mostrarElementos").innerHTML = "";

    $.ajax({
        url: "https://kidcar.herokuapp.com/api/rents",  // the local Node server
        method: 'GET',
        success: function (data) {
            for (x in data)
                showRent(data[x].rent_id, data[x].inicio, data[x].fim, data[x].user_name, data[x].car_name, data[x].type_car_description);
        }
    });
}

function verUtilizador(texto) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/rents/users/" + texto,  // the local Node server
        method: 'GET',
        success: function (data) {
            for (x in data)
                showRent(data[x].rent_id, data[x].inicio, data[x].fim, data[x].user_name, data[x].car_name, data[x].type_car_description);

            document.getElementById("mostrarElementos").innerHTML += "<br><button class='btnVerTodos' onclick='verTodos()'> ver todos </button>";
        }
    });
}

function verCarro(texto) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/rents/cars/" + texto,  // the local Node server
        method: 'GET',
        success: function (data) {
            for (x in data)
                showRent(data[x].rent_id, data[x].inicio, data[x].fim, data[x].user_name, data[x].car_name, data[x].type_car_description);

            document.getElementById("mostrarElementos").innerHTML += "<br><button class='btnVerTodos' onclick='verTodos()'> ver todos </button>";
        }
    });
}

function verTipo(texto) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/rents/cars/type/" + texto,  // the local Node server
        method: 'GET',
        success: function (data) {
            for (x in data)
                showRent(data[x].rent_id, data[x].inicio, data[x].fim, data[x].user_name, data[x].car_name, data[x].type_car_description);

            document.getElementById("mostrarElementos").innerHTML += "<br><button class='btnVerTodos' onclick='verTodos()'> ver todos </button>";
        }
    });

}

function showRent(id, inicio, fim, utilizador, carro, tipo) {

    var alugueres = "<div id='aluguer" + id + "' class='element'>" + new Date(inicio).toLocaleDateString() + " - " + new Date(fim).toLocaleDateString() + "<br><br> - " + carro + "- <br> - " + utilizador + " - <br>" + "<br><br> <button id='btnAluguer" + id + "' class='btnVer' onclick='verAluguer(" + id + "," + JSON.stringify(inicio) + "," + JSON.stringify(fim) + "," + JSON.stringify(utilizador) + "," + JSON.stringify(carro) + "," + JSON.stringify(tipo) + ")'> ver aluguer </button></div>";

    document.getElementById("mostrarElementos").innerHTML += alugueres;
}

function selectUsers() {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/users/",  // the local Node server
        method: 'GET',
        success: function (data) {

            var users = "";

            for (x in data) {

                users += "<option value=" + data[x].user_id + ">" + data[x].user_name + "</option>";
            }

            document.getElementById("selectUser").innerHTML = users;
        }
    });
}

function selectCars() {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/cars/",  // the local Node server
        method: 'GET',
        success: function (data) {

            var carros = "";

            for (x in data) {

                carros += "<option value=" + data[x].car_id + ">" + data[x].car_name + "</option>";
            }

            document.getElementById("selectCar").innerHTML = carros;
        }
    });

    document.getElementById("selectCar").addEventListener("change", function () { loadCarType(document.getElementById("selectCar").selectedIndex + 1); });

    loadCarType(1);
}

function verAluguer(id, inicio, fim, user, carro, tipo) {

    for (var i = 0; i < document.getElementById("selectCar").options.length; i++) {
        if (document.getElementById("selectCar").options[i].text === carro) {
            document.getElementById("selectCar").selectedIndex = i;
            break;
        }
    }

    for (var i = 0; i < document.getElementById("selectUser").options.length; i++) {
        if (document.getElementById("selectUser").options[i].text === user) {
            document.getElementById("selectUser").selectedIndex = i;
            break;
        }
    }

    document.getElementById("updateCarType").value = tipo;

    $('#updateStart')[0].valueAsNumber = new Date(inicio).getTime();
    $('#updateEnd')[0].valueAsNumber = new Date(fim).getTime();

    document.getElementById("btnDelete").addEventListener("click", function () { deleteRents(id); });
    document.getElementById("btnUpdate").addEventListener("click", function () { updateRent(id); });

    document.getElementById("viewElement").style.display = "block";
}

function loadCarType(id) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/cars/" + id,  // the local Node server
        method: 'GET',
        success: function (data) {

            for (x in data) {
                document.getElementById("updateCarType").value = data[x].type_car_description;
            }

        }
    });
}

function fecharAluguer() { document.getElementById("viewElement").style.display = "none"; }