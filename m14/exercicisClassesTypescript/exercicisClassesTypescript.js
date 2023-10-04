/* Exercici 1: Crear una classe Persona
Crea una classe Persona amb les següents propietats: nom (string), edat (number) i ciutat (string). Afegeix un mètode saludar() que imprimeixi un missatge de salutació
amb el nom de la persona. Crea diverses instàncies de la classe Persona i utilitza el mètode saludar() per mostrar els missatges de salutació per a cada persona. */
var Persona = /** @class */ (function () {
    function Persona(nom, edat, ciutat) {
        this.nom = nom;
        this.edat = edat;
        this.ciutat = ciutat;
    }
    Persona.prototype.saludar = function () {
        console.log("Hola ".concat(this.nom));
    };
    return Persona;
}());
var david = new Persona("David", 20, "Hospitalet de Llobregat");
var sergio = new Persona("Sergio", 37, "Barcelona");
david.saludar();
sergio.saludar();
/* Exercici 2: Gestió de productes
Crea una classe Producte amb les següents propietats: codi (number), nom (string), preu (number) i quantitat (number).
 Afegeix mètodes per augmentar i disminuir la quantitat de productes disponibles i calcular el preu total
 d'una determinada quantitat de productes. Crea diverses instàncies de la classe Producte i utilitza
 els mètodes per gestionar els productes i calcular els preus totals.
 */
var Producte = /** @class */ (function () {
    function Producte(codi, nom, preu, quantitat) {
        this.codi = codi;
        this.nom = nom;
        this.preu = preu;
        this.quantitat = quantitat;
    }
    Producte.prototype.augmentarQuantitat = function (quantitatAAugmentar) {
        this.quantitat += quantitatAAugmentar;
    };
    Producte.prototype.disminuirQuantitat = function (quantitatADisminuir) {
        if (quantitatADisminuir <= this.quantitat) {
            this.quantitat -= quantitatADisminuir;
        }
        else
            console.log("No puedes quitar más productos de los que tienes");
    };
    Producte.prototype.calcularPreuTotal = function () {
        console.log("El preu total \u00E9s ".concat(this.quantitat * this.preu));
    };
    return Producte;
}());
var teclat = new Producte(1, "Teclat", 35, 5);
var ratoli = new Producte(2, "Ratolí", 15, 3);
teclat.augmentarQuantitat(2);
teclat.calcularPreuTotal();
ratoli.disminuirQuantitat(1);
ratoli.calcularPreuTotal();
/* Exercici 3: Compte bancari
Crea una classe CompteBancari amb les següents propietats: titular (string), saldo (number) i un número d'identificació
d'únic compte bancari (string o number). Afegeix mètodes per ingressar diners al compte, retirar diners del compte i mostrar el saldo actual.
 També pots afegir una propietat per registrar les transaccions realitzades (ingressos i retirades).
  Crea instàncies de la classe CompteBancari i utilitza els mètodes per gestionar els comptes i les transaccions. */
var CompteBancari = /** @class */ (function () {
    function CompteBancari(titular, saldo, id, registre) {
        if (id === void 0) { id = Date.now(); }
        if (registre === void 0) { registre = []; }
        this.titular = titular;
        this.saldo = saldo;
        this.id = id;
        this.registre = registre;
    }
    CompteBancari.prototype.ingressar = function (diners) {
        this.saldo += diners;
        this.registre.push("+ ".concat(diners, "\u20AC"));
    };
    CompteBancari.prototype.retirar = function (diners) {
        if (diners <= this.saldo) {
            this.saldo -= diners;
            this.registre.push("- ".concat(diners, "\u20AC"));
        }
        else {
            console.log("No puedes retirar más dinero del que tienes en la cuenta");
        }
    };
    CompteBancari.prototype.mostrarSaldo = function () {
        console.log("El saldo total es de ".concat(this.saldo, "\u20AC"));
    };
    CompteBancari.prototype.mostrarRegistre = function () {
        console.log(this.registre);
    };
    return CompteBancari;
}());
var compte1 = new CompteBancari("David", 500);
var compte2 = new CompteBancari("Sergio", 1000);
compte1.ingressar(200);
compte1.retirar(50);
compte1.mostrarSaldo();
compte1.mostrarRegistre();
compte2.retirar(1200); //No deixa
compte2.retirar(600);
compte2.retirar(120);
compte2.ingressar(200.5);
compte2.mostrarSaldo();
compte2.mostrarRegistre();
