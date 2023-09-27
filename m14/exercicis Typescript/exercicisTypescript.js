//Execici 1
var sumaDeNombres = function (array) {
    return array.reduce(function (acumulador, num) { return acumulador + num; });
};
console.log("Exercici 1: " + sumaDeNombres([1, 2, 3, 4, 5]));
//Exercici 2
var filtrarNombresParells = function (array) {
    return array.filter(function (num) { return num % 2 === 0; });
};
console.log("Exercici 2: " + filtrarNombresParells([0, 1, 3, 5, 8, 12, 21, 22]));
//Exercici 3
var comptarParaules = function (frase) {
    return frase.split(" ").length;
};
console.log("Exercici 3: " + comptarParaules("Esta frase tiene cinco palabras"));
//Exercici 4
var invertirCadena = function (cadena) {
    return cadena.split("").reverse().join("");
};
console.log("Exercici 4: " + invertirCadena("hola"));
//Exercici 5
var calcularFactorial = function (num) {
    var numero = parseInt(num.toFixed(0));
    var factorial = 1;
    if (numero < 0) {
        throw new Error("El número tiene que ser mayor o igual que 0");
    }
    else if (numero === 0) {
        return 1;
    }
    else {
        for (var i = 1; i <= numero; i++) {
            factorial *= i;
        }
        return factorial;
    }
};
console.log("Exercici 5: " + calcularFactorial(5));
//Exercici 6
var buscarElNombreMesGran = function (array) {
    return Math.max.apply(Math, array);
};
console.log("Exercici 6: " + buscarElNombreMesGran([5, 2, 4, 8, 7, 6, 12, 9]));
//Exercici 7
var validadorDePalindroms = function (paraula) {
    return paraula === paraula.split("").reverse().join("");
};
console.log("Exercici 7: " + validadorDePalindroms("sugus"));
console.log("Exercici 7: " + validadorDePalindroms("hola"));
//Exercici 8
var generadorDeNombresAleatoris = function (min, max) {
    return Math.round(Math.random() * (max - min) + min);
};
console.log("Exercici 8: " + generadorDeNombresAleatoris(2, 6));
