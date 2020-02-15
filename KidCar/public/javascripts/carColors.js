function insertColors() {
    if (confirm("Inserir Cor?")) {
        $.ajax({
            url: "https://kidcar.herokuapp.com/api/carColors",  // the local Node server
            data: JSON.stringify({
                "color_name": document.getElementById('addColorName').value
            }),
            method: 'POST',
            contentType: 'application/json',
            success: function () {
                window.location.href = "carColors.html";
            }
        });
    }
}

function updateColor(id) {
    if (confirm("Guardar Alterações?")) {
        $.ajax({
            url: "https://kidcar.herokuapp.com/api/carColors",  // the local Node server
            data: JSON.stringify({
                "color_name": document.getElementById('updateColorName').value,

                "color_id": id
            }),
            method: 'PUT',
            contentType: 'application/json',
            success: function () {
                window.location.href = "carColors.html";
            }
        });
    }
}

function deleteColor(id) {
    if (confirm("Eliminar Cor?")) {
        $.ajax({
            url: "https://kidcar.herokuapp.com/api/carColors",  // the local Node server
            data: JSON.stringify({ "color_id": id }),
            method: 'DELETE',
            contentType: 'application/json',
            success: function () {
                window.location.href = "carColors.html";
            }
        });
    }
}

function verTodos() {

    document.getElementById("mostrarElementos").innerHTML = "";

    $.ajax({
        url: "https://kidcar.herokuapp.com/api/carColors",  // the local Node server
        method: 'GET',
        success: function (data) {
            for (x in data)
                showColor(data[x].color_id, data[x].color_name);
        }
    });
}

function verNome() {
    document.getElementById("mostrarElementos").innerHTML = "";

    $.ajax({
        url:  "https://kidcar.herokuapp.com/api/carColors/" + document.getElementById("txtPesquisaCores").value,  // the local Node server
        method: 'GET',
        success: function (data) {
            for (x in data)
                showColor(data[x].color_id, data[x].color_name);

            document.getElementById("mostrarElementos").innerHTML += "<br><button class='btnVerTodos' onclick='verTodos()'> ver todos </button>";
        }
    });
}

function showColor(id, nome) {

    var cores = "<div id='cor" + id + "' class='element'>" +  nome + "<br><br> <button id='btnCor" + id + "' class='btnVer' onclick='verCor(" + id + "," + JSON.stringify(nome) + ")'> ver cor </button></div>";

    document.getElementById("mostrarElementos").innerHTML += cores;
}

function verCor(id, nome) {
    document.getElementById("updateColorName").value = nome;

    document.getElementById("btnDelete").addEventListener("click", function () { deleteColor(id); });
    document.getElementById("btnUpdate").addEventListener("click", function () { updateColor(id); });

    document.getElementById("viewElement").style.display = "block";
}

function fecharCor() { document.getElementById("viewElement").style.display = "none"; }