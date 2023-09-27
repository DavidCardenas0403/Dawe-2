var mensaje;
var contrasenya;
//Funció principal que crida a la resta de funcions per comprovar si la contrasenya compleix tots els requeriments
var comprovarContrasenya = function () {
    var paràgraf = document.getElementById("mensajeError");
    paràgraf.innerHTML = "";
    mensaje = [];
    contrasenya = document.getElementById("contrasenya")
        .value;
    if (contrasenya) {
        comprovarLlargada(contrasenya);
        comprovarCaracters(contrasenya);
    }
    else {
        mensaje.push("Escriu una contrasenya");
    }
    if (mensaje.length === 0) {
        mensaje.push("La contrasenya és vàlida");
    }
    for (var _i = 0, mensaje_1 = mensaje; _i < mensaje_1.length; _i++) {
        var msj = mensaje_1[_i];
        var li = document.createElement("li");
        li.textContent = msj;
        paràgraf.appendChild(li);
    }
};
//Funció que comprova que la contrasenya tingui entre 8 i 20 caracters (ambdós inclosos)
var comprovarLlargada = function (contrasenya) {
    if (contrasenya.length < 8 || contrasenya.length > 20) {
        mensaje.push("La contrasenya ha de tenir entre 8 i 20 caracters");
    }
};
//Funció que comprova que la contrasenya tingui com a mínim 3 minúscules, 1 majúscula, 2 dígits i que no tingui 3 caracters iguals seguits
var comprovarCaracters = function (contrasenya) {
    var minuscules = 0;
    var majuscules = 0;
    var digits = 0;
    var caractersSeguits = 1;
    for (var index = 0; index < contrasenya.length; index++) {
        if (/[a-z]/.test(contrasenya[index])) {
            minuscules++;
        }
        else if (/[A-Z]/.test(contrasenya[index])) {
            majuscules++;
        }
        else if (/[0-9]/.test(contrasenya[index])) {
            digits++;
        }
        if (contrasenya[index] === contrasenya[index - 1]) {
            caractersSeguits++;
        }
        else {
            caractersSeguits = 1;
        }
        if (caractersSeguits === 3) {
            mensaje.push("La contrasenya no pot tenir 3 caracters iguals seguits");
            //return;
        }
    }
    if (minuscules < 3) {
        mensaje.push("La contrasenya ha de tenir 3 minúscules com a mínim");
    }
    if (majuscules < 1) {
        mensaje.push("La contrasenya ha de tenir 1 majúscula com a mínim");
    }
    if (digits < 2) {
        mensaje.push("La contrasenya ha de tenir 2 dígits com a mínim");
    }
};
var mostrarOcultarContrasenya = function () {
    if (document.getElementById("mostrar-ocultar").textContent === "Mostrar") {
        document.getElementById("mostrar-ocultar").textContent = "Ocultar";
        document.getElementById("contrasenya").setAttribute("type", "text");
    }
    else {
        document.getElementById("mostrar-ocultar").textContent = "Mostrar";
        document
            .getElementById("contrasenya")
            .setAttribute("type", "password");
    }
};
