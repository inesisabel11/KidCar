function insertCars() {
    if (confirm("Inserir Carro?")) {
        $.ajax({
            url: "https://kidcar.herokuapp.com/api/cars",  // the local Node server
            data: JSON.stringify({
                "car_color_id": document.getElementById('selectCarColor').options[document.getElementById('selectCarColor').selectedIndex].value,

                "car_name": document.getElementById('addCarName').value,

                "car_type_car_id": document.getElementById('selectCarType').options[document.getElementById('selectCarType').selectedIndex].value
            }),
            method: 'POST',
            contentType: 'application/json',
            success: function () {
                window.location.href = "cars.html";
            }
        });
    }
}

function updateCar(id) {
    if (confirm("Guardar Alterações?")) {
        $.ajax({
            url: "https://kidcar.herokuapp.com/api/cars",  // the local Node server
            data: JSON.stringify({
                "car_color_id": document.getElementById('selectCarColor').options[document.getElementById('selectCarColor').selectedIndex].value,

                "car_name": document.getElementById('updateCarName').value,

                "car_type_car_id": document.getElementById('selectCarType').options[document.getElementById('selectCarType').selectedIndex].value,

                "car_id": id
            }),
            method: 'PUT',
            contentType: 'application/json',
            success: function () {
                window.location.href = "cars.html";
            }
        });
    }
}

function deleteCar(id) {
    if (confirm("Eliminar Carro?")) {
        $.ajax({
            url: "https://kidcar.herokuapp.com/api/cars",  // the local Node server
            data: JSON.stringify({ "car_id": id }),
            method: 'DELETE',
            contentType: 'application/json',
            success: function () {
                window.location.href = "cars.html";
            }
        });
    }
}

function pesquisarCarros() {

    document.getElementById("mostrarElementos").innerHTML = "";

    var opcao = document.getElementById("pesquisarCarrosPor");
    var pesquisar = opcao.options[opcao.selectedIndex].value;

    if (pesquisar == "nome")
        verNome(document.getElementById("txtPesquisaCarros").value);
    else if (pesquisar == "cor")
        verCor(document.getElementById("txtPesquisaCarros").value);
    else if (pesquisar == "tipo")
        verTipo(document.getElementById("txtPesquisaCarros").value);
}

function verTodos() {

    document.getElementById("mostrarElementos").innerHTML = "";

    $.ajax({
        url: "https://kidcar.herokuapp.com/api/cars",  // the local Node server
        method: 'GET',
        success: function (data) {
            for (x in data)
                showCar(data[x].car_id, data[x].car_name, data[x].color_id, data[x].color_name, data[x].type_car_id, data[x].type_car_description);
        }
    });
}

function verNome(texto) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/cars/name/" + texto,  // the local Node server
        method: 'GET',
        success: function (data) {
            for (x in data)
                showCar(data[x].car_id, data[x].car_name, data[x].color_id, data[x].color_name, data[x].type_car_id, data[x].type_car_description);

            document.getElementById("mostrarElementos").innerHTML += "<br><button class='btnVerTodos' onclick='verTodos()'> ver todos </button>";
        }
    });
}

function verCor(texto) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/cars/color/" + texto,  // the local Node server
        method: 'GET',
        success: function (data) {
            for (x in data)
                showCar(data[x].car_id, data[x].car_name, data[x].color_id, data[x].color_name, data[x].type_car_id, data[x].type_car_description);

            document.getElementById("mostrarElementos").innerHTML += "<br><button class='btnVerTodos' onclick='verTodos()'> ver todos </button>";
        }
    });
}

function verTipo(texto) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/cars/type/" + texto,  // the local Node server
        method: 'GET',
        success: function (data) {
            for (x in data)
                showCar(data[x].car_id, data[x].car_name, data[x].color_id, data[x].color_name, data[x].type_car_id, data[x].type_car_description);

            document.getElementById("mostrarElementos").innerHTML += "<br><button class='btnVerTodos' onclick='verTodos()'> ver todos </button>";
        }
    });

}

function showCar(id, nome, idCor, cor, idTipo, tipo) {

    var carros = "<div id='carro" + id + "' class='element'> <img id='imgCarro" + id + "'/> <br>" + nome + "<br><br> - " + cor + " - <br>" + tipo + "<br><br> <button id='btnCarro" + id + "' class='btnVer' onclick='verCarro(" + id + "," + JSON.stringify(nome) + "," + idCor + "," + idTipo + ")'> ver carro </button></div>";

    $.ajax({
        url: '../images/carros/' + id + '.jpg',
        type: 'HEAD',
        error: function () {
            document.getElementById("imgCarro" + id).src = "../images/layout/notFound.png";
        },
        success: function () {
            document.getElementById("imgCarro" + id).src = "../images/carros/" + id + ".jpg";
        }
    });

    document.getElementById("mostrarElementos").innerHTML += carros;
}

function selectColors() {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/carColors/",  // the local Node server
        method: 'GET',
        success: function (data) {

            var cores = "";

            for (x in data) {

                cores += "<option value=" + data[x].color_id + ">" + data[x].color_name + "</option>";
            }

            document.getElementById("selectCarColor").innerHTML = cores;
        }
    });
}

function selectTypes() {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/carTypes/",  // the local Node server
        method: 'GET',
        success: function (data) {

            var tipos = "";

            for (x in data) {

                tipos += "<option value=" + data[x].type_car_id + ">" + data[x].type_car_description + "</option>";
            }

            document.getElementById("selectCarType").innerHTML = tipos;
        }
    });
}

function verCarro(id, nome, cor, tipo) {
    document.getElementById("selectCarType").selectedIndex = tipo - 1;
    document.getElementById("selectCarColor").selectedIndex = cor - 1;
    document.getElementById("updateCarName").value = nome;

    document.getElementById("btnDelete").addEventListener("click", function () { deleteCar(id); });
    document.getElementById("btnUpdate").addEventListener("click", function () { updateCar(id); });

    document.getElementById("viewElement").style.display = "block";
}

function fecharCarro() { document.getElementById("viewElement").style.display = "none"; }