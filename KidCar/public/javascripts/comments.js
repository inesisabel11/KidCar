function insertComments() {

    var data = new Date();

    if (confirm("Inserir Comentário?")) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/comments",  // the local Node server
        data: JSON.stringify({
            "comment_text": document.getElementById('addCommentText').value,

            "comment_user_id": document.getElementById('selectCommentUser').options[document.getElementById('selectCommentUser').selectedIndex].value,

            "comment_date": data.getFullYear() + "-" + (data.getMonth() + 1) + "-" + data.getUTCDate() + " " + data.getHours() + ":" + data.getMinutes()
        }),
        method: 'POST',
        contentType: 'application/json',
        success: function () {
            window.location.href = "comments.html";
        }
    });
}
}


function updateComment(id) {
    if (confirm("Guardar Alterações?")) {
        $.ajax({
            url: "https://kidcar.herokuapp.com/api/comments",  // the local Node server
            data: JSON.stringify({
                "comment_text": document.getElementById('updateCommentTexto').value,

                "comment_user_id": document.getElementById('selectCommentUser').options[document.getElementById('selectCommentUser').selectedIndex].value,

                "comment_date": document.getElementById('updateCommentData').value,

                "comment_id": id
            }),
            method: 'PUT',
            contentType: 'application/json',
            success: function () {
               window.location.href = "comments.html";
            }
        });
    }
}

function deleteComment(id) {
    if (confirm("Eliminar Comentario?")) {
        $.ajax({
            url: "https://kidcar.herokuapp.com/api/comments",  // the local Node server
            data: JSON.stringify({ "comment_id": id }),
            method: 'DELETE',
            contentType: 'application/json',
            success: function () {
               window.location.href = "comments.html";
            }
        });
    }
}

function changeType() {
    if (document.getElementById("pesquisarComentariosPor").options[document.getElementById("pesquisarComentariosPor").selectedIndex].value == "data")
        document.getElementById("txtPesquisaComentarios").type = "date";
    else
        document.getElementById('txtPesquisaComentarios').type = 'text';
}

function pesquisarComentarios() {

    document.getElementById("mostrarElementos").innerHTML = "";

    var opcao = document.getElementById("pesquisarComentariosPor");
    var pesquisar = opcao.options[opcao.selectedIndex].value;

    if (pesquisar == "texto")
        verTexto(document.getElementById("txtPesquisaComentarios").value);
    else if (pesquisar == "user")
        verUser(document.getElementById("txtPesquisaComentarios").value);
    else if (pesquisar == "data")
        verData(document.getElementById("txtPesquisaComentarios").value);
    else if (pesquisar == "car")
        varCarro(document.getElementById("txtPesquisarComentarios").value);
}

function verTodos() {

    document.getElementById("mostrarElementos").innerHTML = "";

    $.ajax({
        url: "https://kidcar.herokuapp.com/api/comments",  // the local Node server
        method: 'GET',
        success: function (data) {
            for (x in data)
                showComment(data[x].comment_id, data[x].comment_text, data[x].date, data[x].user_id, data[x].user_name);
        }
    });
}

function verTexto(texto) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/comments/text/" + texto,  // the local Node server
        method: 'GET',
        success: function (data) {
            for (x in data)
                showComment(data[x].comment_id, data[x].comment_text, data[x].date, data[x].user_id, data[x].user_name);

            document.getElementById("mostrarElementos").innerHTML += "<br><button class='btnVerTodos' onclick='verTodos()'> ver todos </button>";
        }
    });
}

function verUser(texto) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/comments/users/name/" + texto,  // the local Node server
        method: 'GET',
        success: function (data) {
            for (x in data)
                showComment(data[x].comment_id, data[x].comment_text, data[x].date, data[x].user_id, data[x].user_name);

            document.getElementById("mostrarElementos").innerHTML += "<br><button class='btnVerTodos' onclick='verTodos()'> ver todos </button>";
        }
    });
}

function verData(texto) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/comments/date/" + texto,  // the local Node server
        method: 'GET',
        success: function (data) {
            for (x in data)
                showComment(data[x].comment_id, data[x].comment_text, data[x].date, data[x].user_id, data[x].user_name);

            document.getElementById("mostrarElementos").innerHTML += "<br><button class='btnVerTodos' onclick='verTodos()'> ver todos </button>";
        }
    });

}

/*function verCarro(texto) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/comments/cars" + texto,  // the local Node server
        method: 'GET',
        success: function (data) {
            for (x in data)
                showComment(data[x].comment_id, data[x].comment_text,data[x].user_id, data[x].user_name, data[x].comment_date, data[x].car_id, data[x].car_name);

            document.getElementById("mostrarElementos").innerHTML += "<br><button class='btnVerTodos' onclick='verTodos()'> ver todos </button>";
        }
    });

}*/

function showComment(id, text, date, userId, nomeUser) {
    var comments = "<div id='comentario" + id + "' class='element'> <br>" + text + "<br><br> - " + nomeUser + " - <br> - " + new Date(date).toLocaleDateString() + "<br><br> <button id='btnComentario" + id + "' class='btnVer' onclick='verComentario(" + id + "," + JSON.stringify(text) + "," + userId + "," + JSON.stringify(date) + ")'> ver comentario </button></div>";

    document.getElementById("mostrarElementos").innerHTML += comments;
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

            document.getElementById("selectCommentUser").innerHTML = users;
        }
    });
}

/*function selectCommentCar() {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/comments/cars",  // the local Node server
        method: 'GET',
        success: function (data) {

            var cars = "";

            for (x in data) {

                cars += "<option value=" + data[x].car_id + ">" + data[x].car_name + "</option>";
            }

            document.getElementById("selectCommentCar").innerHTML = cars;
        }
    });
}*/

function verComentario(id, text, userId, date) {
    document.getElementById("selectCommentUser").selectedIndex = userId - 1;
    document.getElementById("updateCommentTexto").value = text;

    $('#updateCommentData')[0].valueAsNumber = new Date(date).getTime();
    //document.getElementById("selectCommentCar").selectedIndex = carId - 1;

    document.getElementById("btnDelete").addEventListener("click", function () { deleteComment(id); });
    document.getElementById("btnUpdate").addEventListener("click", function () { updateComment(id); });

    document.getElementById("viewElement").style.display = "block";
}

function fecharComentario() { document.getElementById("viewElement").style.display = "none"; }