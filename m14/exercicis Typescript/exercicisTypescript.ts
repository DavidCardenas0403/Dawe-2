//Execici 1
const sumaDeNombres = (array: number[]): number => {
    return array.reduce((acumulador, num) => acumulador + num);
};

console.log("Exercici 1: " + sumaDeNombres([1, 2, 3, 4, 5]));

//Exercici 2
const filtrarNombresParells = (array: number[]): number[] => {
    return array.filter((num) => num % 2 === 0);
};

console.log(
    "Exercici 2: " + filtrarNombresParells([0, 1, 3, 5, 8, 12, 21, 22])
);

//Exercici 3
const comptarParaules = (frase: string): number => {
    return frase.split(" ").length;
};

console.log(
    "Exercici 3: " + comptarParaules("Esta frase tiene cinco palabras")
);

//Exercici 4
const invertirCadena = (cadena: string): string => {
    return cadena.split("").reverse().join("");
};

console.log("Exercici 4: " + invertirCadena("hola"));

//Exercici 5
const calcularFactorial = (num: number): number => {
    const numero = parseInt(num.toFixed(0));
    let factorial = 1;
    if (numero < 0) {
        throw new Error("El número tiene que ser mayor o igual que 0");
    } else if (numero === 0) {
        return 1;
    } else {
        for (let i = 1; i <= numero; i++) {
            factorial *= i;
        }
        return factorial;
    }
};

console.log("Exercici 5: " + calcularFactorial(5));

//Exercici 6
const buscarElNombreMesGran = (array: number[]): number => {
    return Math.max(...array);
};

console.log("Exercici 6: " + buscarElNombreMesGran([5, 2, 4, 8, 7, 6, 12, 9]));

//Exercici 7
