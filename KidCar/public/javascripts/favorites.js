function insertFavorites() {
    if (confirm("Inserir Favorito?")) {
        $.ajax({
            url: "https://kidcar.herokuapp.com/api/favorites",  // the local Node server
            data: JSON.stringify({
                "favorite_car_id": document.getElementById('selectCar').options[document.getElementById('selectCar').selectedIndex].value,

                "favorite_user_id": document.getElementById('selectUser').options[document.getElementById('selectUser').selectedIndex].value
            }),
            method: 'POST',
            contentType: 'application/json',
            success: function () {
                window.location.href = "favorites.html";
            }
        });
    }
}

function updateFavorite(id) {
    if (confirm("Guardar Alterações?")) {
        $.ajax({
            url: "https://kidcar.herokuapp.com/api/favorites",  // the local Node server
            data: JSON.stringify({
                "favorite_user_id": document.getElementById('selectUser').options[document.getElementById('selectUser').selectedIndex].value,

                "favorite_car_id": document.getElementById('selectCar').options[document.getElementById('selectCar').selectedIndex].value,

                "favorite_id": id
            }),
            method: 'PUT',
            contentType: 'application/json',
            success: function () {
                window.location.href = "favorites.html";
            }
        });
    }
}

function deleteFavorite(id) {
    if (confirm("Eliminar Favorito?")) {
        $.ajax({
            url: "https://kidcar.herokuapp.com/api/favorites",  // the local Node server
            data: JSON.stringify({ "favorite_id": id }),
            method: 'DELETE',
            contentType: 'application/json',
            success: function () {
                window.location.href = "favorites.html";
            }
        });
    }
}

function pesquisarFavoritos() {

    document.getElementById("mostrarElementos").innerHTML = "";

    var opcao = document.getElementById("pesquisarFavoritosPor");
    var pesquisar = opcao.options[opcao.selectedIndex].value;

    if (pesquisar == "utilizador")
        verUtilizador(document.getElementById("txtPesquisaFavoritos").value);
    else if (pesquisar == "carro")
        verCarro(document.getElementById("txtPesquisaFavoritos").value);
    else if (pesquisar == "tipo")
        verTipo(document.getElementById("txtPesquisaFavoritos").value);
    else if (pesquisar == "cor")
        verCor(document.getElementById("txtPesquisaFavoritos").value);
}

function verTodos() {
    document.getElementById("mostrarElementos").innerHTML = "";

    $.ajax({
        url: "https://kidcar.herokuapp.com/api/favorites",  // the local Node server
        method: 'GET',
        success: function (data) {

            for (x in data)
                showFavorite(data[x].favorite_id, data[x].favorite_car_id, data[x].car_name, data[x].color_name, data[x].type_car_description, data[x].favorite_user_id, data[x].user_name, data[x].user_phone);
        }
    });
}

function verUtilizador(texto) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/favorites/users/" + texto,  // the local Node server
        method: 'GET',
        success: function (data) {
            for (x in data)
                showFavorite(data[x].favorite_id, data[x].favorite_car_id, data[x].car_name, data[x].color_name, data[x].type_car_description, data[x].favorite_user_id, data[x].user_name, data[x].user_phone);

            document.getElementById("mostrarElementos").innerHTML += "<br><button class='btnVerTodos' onclick='verTodos()'> ver todos </button>";
        }
    });
}

function verCarro(texto) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/favorites/cars/" + texto,  // the local Node server
        method: 'GET',
        success: function (data) {

            for (x in data)
                showFavorite(data[x].favorite_id, data[x].favorite_car_id, data[x].car_name, data[x].color_name, data[x].type_car_description, data[x].favorite_user_id, data[x].user_name, data[x].user_phone);

            document.getElementById("mostrarElementos").innerHTML += "<br><button class='btnVerTodos' onclick='verTodos()'> ver todos </button>";
        }
    });
}

function verTipo(texto) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/favorites/cars/type/" + texto,  // the local Node server
        method: 'GET',
        success: function (data) {

            for (x in data)
                showFavorite(data[x].favorite_id, data[x].favorite_car_id, data[x].car_name, data[x].color_name, data[x].type_car_description, data[x].favorite_user_id, data[x].user_name, data[x].user_phone);

            document.getElementById("mostrarElementos").innerHTML += "<br><button class='btnVerTodos' onclick='verTodos()'> ver todos </button>";
        }
    });
}

function verCor(texto) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/favorites/cars/color/" + texto,  // the local Node server
        method: 'GET',
        success: function (data) {
            for (x in data)
                showFavorite(data[x].favorite_id, data[x].favorite_car_id, data[x].car_name, data[x].color_name, data[x].type_car_description, data[x].favorite_user_id, data[x].user_name, data[x].user_phone);

            document.getElementById("mostrarElementos").innerHTML += "<br><button class='btnVerTodos' onclick='verTodos()'> ver todos </button>";
        }
    });
}

function showFavorite(id, idCarro, carro, corCarro, tipoCarro, idUtilizador, utilizador, telefoneUtilizador) {
    var favoritos = "<div id='favorito' class='element'> <img id='imgCarro" + idCarro + "'/> <br>" + carro + "<br><br> - " + utilizador + " - <br><br> <button id='btnFavorito" + idCarro + "_" + idUtilizador + "' class='btnVer' onclick='verFavorito(" + id + "," + idCarro + "," + JSON.stringify(carro) + "," + JSON.stringify(corCarro) + "," + JSON.stringify(tipoCarro) + "," + idUtilizador + "," + JSON.stringify(utilizador) + "," + JSON.stringify(telefoneUtilizador) + ")'> ver favorito </button></div>";

    $.ajax({
        url: '../images/carros/' + idCarro + '.jpg',
        type: 'HEAD',
        error: function () {
            document.getElementById("imgCarro" + idCarro).src = "../images/layout/notFound.png";
        },
        success: function () {
            document.getElementById("imgCarro" + idCarro).src = "../images/carros/" + idCarro + ".jpg";
        }
    });

    document.getElementById("mostrarElementos").innerHTML += favoritos;
}

function selectCars() {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/cars/",  // the local Node server
        method: 'GET',
        success: function (data) {

            var carro = "";

            for (x in data) {

                carro += "<option value=" + data[x].car_id + ">" + data[x].car_name + "</option>";
            }

            document.getElementById("selectCar").innerHTML = carro;
        }
    });
}

function selectUsers() {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/users/",  // the local Node server
        method: 'GET',
        success: function (data) {

            var user = "";

            for (x in data) {

                user += "<option value=" + data[x].user_id + ">" + data[x].user_name + "</option>";
            }

            document.getElementById("selectUser").innerHTML = user;
        }
    });
}

function verFavorito(id, idCarro, carro, corCarro, tipoCarro, idUtilizador, utilizador, telefoneUtilizador) {
    document.getElementById("selectCar").selectedIndex = idCarro - 1;
    document.getElementById("FavoriteCarColor").value = corCarro;
    document.getElementById("FavoriteCarType").value = tipoCarro;

    document.getElementById("selectUser").selectedIndex = idUtilizador - 1;
    document.getElementById("FavoriteUserName").value = utilizador;
    document.getElementById("FavoriteUserPhone").value = telefoneUtilizador;

    document.getElementById("selectCar").addEventListener("change", function () { loadCarInfo(document.getElementById("selectCar").selectedIndex + 1); });
    document.getElementById("selectUser").addEventListener("change", function () { loadUserInfo(document.getElementById("selectUser").selectedIndex + 1); });

    document.getElementById("btnDelete").addEventListener("click", function () { deleteFavorite(id); });
    document.getElementById("btnUpdate").addEventListener("click", function () { updateFavorite(id); });

    document.getElementById("viewElement").style.display = "block";
}

function fecharFavorito() { document.getElementById("viewElement").style.display = "none"; }

function loadCarInfo(id) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/cars/" + id,  // the local Node server
        method: 'GET',
        success: function (data) {

            for (x in data) {
                document.getElementById("FavoriteCarColor").value = data[x].color_name;
                document.getElementById("FavoriteCarType").value = data[x].type_car_description;
            }

        }
    });
}

function loadUserInfo(id) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/users/" + id,  // the local Node server
        method: 'GET',
        success: function (data) {

            for (x in data) {
                document.getElementById("FavoriteUserName").value = data[x].user_name;
                document.getElementById("FavoriteUserPhone").value = data[x].user_phone;
            }

        }
    });
}