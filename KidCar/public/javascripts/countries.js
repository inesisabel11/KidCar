function insertCountries() {
    if (confirm("Inserir País?")) {
        $.ajax({
            url: "https://kidcar.herokuapp.com/api/countries",  // the local Node server
            data: JSON.stringify({
                "country_name": document.getElementById('addCountry').value
            }),
            method: 'POST',
            contentType: 'application/json',
            success: function () {
                window.location.href = "countries.html";
            }
        });
    }
}

function updateCountries(id) {
    if (confirm("Guardar Alterações?")) {
        $.ajax({
            url: "https://kidcar.herokuapp.com/api/countries",  // the local Node server
            data: JSON.stringify({
                "country_name": document.getElementById('updateCountry').value,

                "country_id": id
            }),
            method: 'PUT',
            contentType: 'application/json',
            success: function () {
                window.location.href = "countries.html";
            }
        });
    }
}

function deleteCountries(id) {
    if (confirm("Eliminar País?")) {
        $.ajax({
            url: "https://kidcar.herokuapp.com/api/countries",  // the local Node server
            data: JSON.stringify({ "country_id": id }),
            method: 'DELETE',
            contentType: 'application/json',
            success: function () {
                window.location.href = "countries.html";
            }
        });
    }
}

function verTodos() {

    document.getElementById("mostrarElementos").innerHTML = "";

    $.ajax({
        url: "https://kidcar.herokuapp.com/api/countries",  // the local Node server
        method: 'GET',
        success: function (data) {
            for (x in data)
                showCountry(data[x].country_id, data[x].country_name);
        }
    });
}

function verNome(texto) {
    document.getElementById("mostrarElementos").innerHTML = "";
    
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/countries/name/" + document.getElementById("txtPesquisaPais").value,  // the local Node server
        method: 'GET',
        success: function (data) {
            for (x in data)
                showCountry(data[x].country_id, data[x].country_name);

            document.getElementById("mostrarElementos").innerHTML += "<br><button class='btnVerTodos' onclick='verTodos()'> ver todos </button>";
        }
    });
}

function showCountry(id, nome) {

    var paises = "<div id='pais" + id + "' class='element'> <br>" + nome + "<br><br> <button id='btnPais" + id + "' class='btnVer' onclick='verPaises(" + id + "," + JSON.stringify(nome) + ")'> ver pais </button></div>";

    document.getElementById("mostrarElementos").innerHTML += paises;
}

function verPaises(id, nome) {
    document.getElementById("updateCountry").value = nome;

    document.getElementById("btnDelete").addEventListener("click", function () { deleteCountries(id); });
    document.getElementById("btnUpdate").addEventListener("click", function () { updateCountries(id); });

    document.getElementById("viewElement").style.display = "block";
}

function fecharPais() { document.getElementById("viewElement").style.display = "none"; }