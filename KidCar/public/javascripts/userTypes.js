function insertTypes() {
    if (confirm("Inserir Tipo?")) {
        $.ajax({
            url: "https://kidcar.herokuapp.com/api/login/userTypes",  // the local Node server
            data: JSON.stringify({
                "user_type_desc": document.getElementById('addTypeName').value
            }),
            method: 'POST',
            contentType: 'application/json',
            success: function () {
                window.location.href = "userTypes.html";
            }
        });
    }
}

function updateType(id) {
    if (confirm("Guardar Alterações?")) {
        $.ajax({
            url: "https://kidcar.herokuapp.com/api/login/userTypes",  // the local Node server
            data: JSON.stringify({
                "user_type_desc": document.getElementById('updateTypeName').value,

                "user_type_id": id
            }),
            method: 'PUT',
            contentType: 'application/json',
            success: function () {
                window.location.href = "userTypes.html";
            }
        });
    }
}

function deleteType(id) {
    if (confirm("Eliminar Tipo?")) {
        $.ajax({
            url: "https://kidcar.herokuapp.com/api/login/userTypes",  // the local Node server
            data: JSON.stringify({ "user_type_id": id }),
            method: 'DELETE',
            contentType: 'application/json',
            success: function () {
                window.location.href = "userTypes.html";
            }
        });
    }
}

function verTodos() {

    document.getElementById("mostrarElementos").innerHTML = "";

    $.ajax({
        url: "https://kidcar.herokuapp.com/api/login/userTypes",  // the local Node server
        method: 'GET',
        success: function (data) {
            for (x in data)
                showTypes(data[x].user_type_id, data[x].user_type_desc);
        }
    });
}

function verNome() {
    document.getElementById("mostrarElementos").innerHTML = "";

    $.ajax({
        url: "https://kidcar.herokuapp.com/api/login/userTypes/" + document.getElementById("txtPesquisaTipos").value,  // the local Node server
        method: 'GET',
        success: function (data) {
            for (x in data)
            showTypes(data[x].user_type_id, data[x].user_type_desc);

            document.getElementById("mostrarElementos").innerHTML += "<br><button class='btnVerTodos' onclick='verTodos()'> ver todos </button>";
        }
    });
}

function showTypes(id, nome) {

    var tipos = "<div id='tipo" + id + "' class='element'>" +  nome + "<br><br> <button id='btnTipo" + id + "' class='btnVer' onclick='verTipo(" + id + "," + JSON.stringify(nome) + ")'> ver tipo </button></div>";

    document.getElementById("mostrarElementos").innerHTML += tipos;
}

function verTipo(id, nome) {
    document.getElementById("updateTypeName").value = nome;

    document.getElementById("btnDelete").addEventListener("click", function () { deleteType(id); });
    document.getElementById("btnUpdate").addEventListener("click", function () { updateType(id); });

    document.getElementById("viewElement").style.display = "block";
}

function fecharTipo() { document.getElementById("viewElement").style.display = "none"; }