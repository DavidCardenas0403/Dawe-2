let contrasenya: string | null = (
    document.getElementById("contrasenya") as HTMLInputElement
).value;

//Funció principal que crida a la resta de funcions per comprovar si la contrasenya compleix tots els requeriments
const comprovarContrasenya = () => {};

//Funció que comprova que la contrasenya tingui entre 8 i 20 caracters (ambdós inclosos)
const comprovarLlargada = (contrasenya: string): boolean => {
    return contrasenya.length >= 8 && contrasenya.length <= 20;
};

//Funció que comprova que la contrasenya tingui com a mínim 3 minúscules, 1 majúscula, 2 dígits i que no tingui 3 caracters iguals seguits
const comprovarCaracters = (contrasenya: string) => {
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
    }
};
