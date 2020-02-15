function insertUsers() {
    if (confirm("Inserir Utilizador?")) {
        $.ajax({
            url: "https://kidcar.herokuapp.com/api/login/",  // the local Node server
            data: JSON.stringify({
                "login_email": document.getElementById('addUserName').value,

                "login_password": document.getElementById('addUserPassword').value,

                "user_type_id": document.getElementById('selectUserType').options[document.getElementById('selectUserType').selectedIndex].value,

            }),
            method: 'POST',
            contentType: 'application/json',
            success: function (result) {
                getMaxIdLogin();
            }
        });
    }
}

function insertUser(idLogin) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/users/",  // the local Node server
        data: JSON.stringify({
            user_name: document.getElementById('addUserName').value,

            user_phone: document.getElementById('addUserPhone').value,

            user_country_id: document.getElementById('selectCountry').options[document.getElementById('selectCountry').selectedIndex].value,

            user_nif: document.getElementById('addUserNIF').value,

            user_login_id: idLogin

        }),
        method: 'POST',
        contentType: 'application/json',
        success: function (result) {
            window.location.href = "users.html";
        }
    });
}

function getMaxIdLogin() {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/login/maxId",  // the local Node server
        method: 'GET',
        success: function (data) {
            for (x in data)
                insertUser(data[x].max);
        }
    });
}

function updateUser(idUser, idLogin) {
    if (confirm("Guardar Alterações?")) {
        $.ajax({
            url: "https://kidcar.herokuapp.com/api/users/",  // the local Node server
            data: JSON.stringify({
                "user_name": document.getElementById('updateUserName').value,

                "user_phone": document.getElementById('updateUserPhone').value,

                "user_country_id": document.getElementById('selectCountry').options[document.getElementById('selectCountry').selectedIndex].value,

                "user_nif": document.getElementById('updateUserNIF').value,

                "user_id_login": idLogin,

                "user_id": idUser
            }),
            method: 'PUT',
            contentType: 'application/json',
            success: function () {
                updateLogin(idLogin);
            }
        });
    }
}

function updateLogin(idLogin) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/login/",  // the local Node server
        data: JSON.stringify({
            "login_email": document.getElementById('updateUserEmail').value,
            "login_password": document.getElementById('updateUserPassword').value,
            "user_type_id": document.getElementById('selectUserType').options[document.getElementById('selectUserType').selectedIndex].value,

            "login_id": idLogin
        }),
        method: 'PUT',
        contentType: 'application/json',
        success: function () {
            window.location.href = "users.html";
        }
    });
}

function deleteUser(idUser, idLogin) {
    if (confirm("Eliminar User?")) {
        $.ajax({
            url: "https://kidcar.herokuapp.com/api/users/",  // the local Node server
            data: JSON.stringify({ "user_id": idUser }),
            method: 'DELETE',
            contentType: 'application/json',
            success: function () {
                deleteLogin(idLogin);
            }
        });
    }
}

function deleteLogin(idLogin) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/login/",  // the local Node server
        data: JSON.stringify({ "login_id": ""  + idLogin + "" }),
        method: 'DELETE',
        contentType: 'application/json',
        success: function () {
            window.location.href = "users.html";
        }
    });
}

function pesquisarUsers() {

    document.getElementById("mostrarElementos").innerHTML = "";

    var opcao = document.getElementById("pesquisarUsersPor");
    var pesquisar = opcao.options[opcao.selectedIndex].value;

    if (pesquisar == "nome")
        verNome(document.getElementById("txtPesquisaUsers").value);
    else if (pesquisar == "telefone")
        verTelefone(document.getElementById("txtPesquisaUsers").value);
    else if (pesquisar == "pais")
        verPais(document.getElementById("txtPesquisaUsers").value);
    else if (pesquisar == "nif")
        verNif(document.getElementById("txtPesquisaUsers").value);
    else if (pesquisar == "email")
        verEmail(document.getElementById("txtPesquisaUsers").value);
}

function verTodos() {

    document.getElementById("mostrarElementos").innerHTML = "";

    $.ajax({
        url: "https://kidcar.herokuapp.com/api/users",  // the local Node server
        method: 'GET',
        success: function (data) {
            for (x in data)
                showUser(data[x].user_id, data[x].user_name, data[x].user_phone, data[x].user_country_id, data[x].user_nif, data[x].login_id, data[x].login_email, data[x].login_password, data[x].user_type_id);
        }
    });
}

function verNome(texto) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/users/name/" + texto,  // the local Node server
        method: 'GET',
        success: function (data) {
            for (x in data)
                showUser(data[x].user_id, data[x].user_name, data[x].user_phone, data[x].user_country_id, data[x].user_nif, data[x].login_id, data[x].login_email, data[x].login_password, data[x].user_type_id);

            document.getElementById("mostrarElementos").innerHTML += "<br><button class='btnVerTodos' onclick='verTodos()'> ver todos </button>";
        }
    });
}

function verTelefone(texto) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/users/phone/" + texto,  // the local Node server
        method: 'GET',
        success: function (data) {
            for (x in data)
                showUser(data[x].user_id, data[x].user_name, data[x].user_phone, data[x].user_country_id, data[x].user_nif, data[x].login_id, data[x].login_email, data[x].login_password, data[x].user_type_id);

            document.getElementById("mostrarElementos").innerHTML += "<br><button class='btnVerTodos' onclick='verTodos()'> ver todos </button>";
        }
    });
}

function verPais(texto) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/users/country/" + texto,  // the local Node server
        method: 'GET',
        success: function (data) {
            for (x in data)
                showUser(data[x].user_id, data[x].user_name, data[x].user_phone, data[x].user_country_id, data[x].user_nif, data[x].login_id, data[x].login_email, data[x].login_password, data[x].user_type_id);

            document.getElementById("mostrarElementos").innerHTML += "<br><button class='btnVerTodos' onclick='verTodos()'> ver todos </button>";
        }
    });
}

function verNif(texto) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/users/nif/" + texto,  // the local Node server
        method: 'GET',
        success: function (data) {
            for (x in data)
                showUser(data[x].user_id, data[x].user_name, data[x].user_phone, data[x].user_country_id, data[x].user_nif, data[x].login_id, data[x].login_email, data[x].login_password, data[x].user_type_id);

            document.getElementById("mostrarElementos").innerHTML += "<br><button class='btnVerTodos' onclick='verTodos()'> ver todos </button>";
        }
    });
}

function verEmail(texto) {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/users/email/" + texto,  // the local Node server
        method: 'GET',
        success: function (data) {
            for (x in data)
                showUser(data[x].user_id, data[x].user_name, data[x].user_phone, data[x].user_country_id, data[x].user_nif, data[x].login_id, data[x].login_email, data[x].login_password, data[x].user_type_id);

            document.getElementById("mostrarElementos").innerHTML += "<br><button class='btnVerTodos' onclick='verTodos()'> ver todos </button>";
        }
    });
}

function showUser(id, nome, phone, idCountry, nif, idLogin, emailLogin, passwordLogin, userTypeID) {
    var users = "<div id='user" + id + "' class='element'> <br>" + nome + "<br><br> - " + nif + " - <br><br> <button id='btnUser" + id + "' class='btnVer' onclick='verUser(" + id + "," + JSON.stringify(nome) + "," + phone + "," + idCountry + "," + nif + "," + idLogin + "," + JSON.stringify(emailLogin) + "," + JSON.stringify(passwordLogin) + "," + userTypeID + ")'> ver user </button></div>";

    document.getElementById("mostrarElementos").innerHTML += users;
}

function selectUserType() {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/login/userTypes/",  // the local Node server
        method: 'GET',
        success: function (data) {

            var tipos = "";

            for (x in data) {

                tipos += "<option value=" + data[x].user_type_id + ">" + data[x].user_type_desc + "</option>";
            }

            document.getElementById("selectUserType").innerHTML = tipos;
        }
    });
}

function selectCountry() {
    $.ajax({
        url: "https://kidcar.herokuapp.com/api/countries/",  // the local Node server
        method: 'GET',
        success: function (data) {

            var countries = "";

            for (x in data) {

                countries += "<option value=" + data[x].country_id + ">" + data[x].country_name + "</option>";
            }

            document.getElementById("selectCountry").innerHTML = countries;
        }
    });
}

function verUser(id, nome, phone, idCountry, nif, loginId, email, password, userTypeID) {
    document.getElementById("selectCountry").selectedIndex = idCountry - 1;
    document.getElementById("selectUserType").selectedIndex = userTypeID - 1;

    document.getElementById("updateUserName").value = nome;
    document.getElementById("updateUserPhone").value = phone;
    document.getElementById("updateUserNIF").value = nif;
    document.getElementById("updateUserEmail").value = email;
    document.getElementById("updateUserPassword").value = password;

    document.getElementById("btnDelete").addEventListener("click", function () { deleteUser(id, loginId); });
    document.getElementById("btnUpdate").addEventListener("click", function () { updateUser(id, loginId); });

    document.getElementById("viewElement").style.display = "block";
}

function fecharUser() { document.getElementById("viewElement").style.display = "none"; }