let contrasenya: string | null = (
    document.getElementById("contrasenya") as HTMLInputElement
).value;

const comprovarContrasenya = () => {};

const comprovarLlargada = (contrasenya: string): boolean => {
    return contrasenya.length >= 8 && contrasenya.length <= 20;
};

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
