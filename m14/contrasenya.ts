let mensaje: string[];
let contrasenya: string | null;

//Funció principal que crida a la resta de funcions per comprovar si la contrasenya compleix tots els requeriments
const comprovarContrasenya = (): void => {
    const paràgraf: HTMLUListElement = document.getElementById(
        "mensajeError"
    ) as HTMLUListElement;

    paràgraf.innerHTML = "";

    mensaje = [];
    contrasenya = (document.getElementById("contrasenya") as HTMLInputElement)
        .value;
    if (contrasenya) {
        comprovarLlargada(contrasenya);
        comprovarCaracters(contrasenya);
    } else {
        mensaje.push("Escriu una contrasenya");
    }

    if (mensaje.length === 0) {
        mensaje.push("La contrasenya és vàlida");
    }

    //Quitar posibles duplicados del array
    mensaje = Array.from(new Set(mensaje));

    for (const msj of mensaje) {
        const li = document.createElement("li");
        li.textContent = msj;
        paràgraf.appendChild(li);
    }
};

//Funció que comprova que la contrasenya tingui entre 8 i 20 caracters (ambdós inclosos)
const comprovarLlargada = (contrasenya: string): void => {
    if (contrasenya.length < 8 || contrasenya.length > 20) {
        mensaje.push("La contrasenya ha de tenir entre 8 i 20 caracters");
    }
};

//Funció que comprova que la contrasenya tingui com a mínim 3 minúscules, 1 majúscula, 2 dígits i que no tingui 3 caracters iguals seguits
const comprovarCaracters = (contrasenya: string): void => {
    let minuscules: number = 0;
    let majuscules: number = 0;
    let digits: number = 0;
    let caractersSeguits: number = 1;

    for (let index: number = 0; index < contrasenya.length; index++) {
        if (/[a-z]/.test(contrasenya[index])) {
            minuscules++;
        } else if (/[A-Z]/.test(contrasenya[index])) {
            majuscules++;
        } else if (/[0-9]/.test(contrasenya[index])) {
            digits++;
        }

        if (contrasenya[index] === contrasenya[index - 1]) {
            caractersSeguits++;
        } else {
            caractersSeguits = 1;
        }

        if (caractersSeguits === 3) {
            mensaje.push(
                "La contrasenya no pot tenir 3 caracters iguals seguits"
            );
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

const mostrarOcultarContrasenya = (): void => {
    if (document.getElementById("mostrar-ocultar")!.textContent === "Mostrar") {
        document.getElementById("mostrar-ocultar")!.textContent = "Ocultar";
        document.getElementById("contrasenya")!.setAttribute("type", "text");
    } else {
        document.getElementById("mostrar-ocultar")!.textContent = "Mostrar";
        document
            .getElementById("contrasenya")!
            .setAttribute("type", "password");
    }
};
