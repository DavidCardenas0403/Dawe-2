/* Exercici 1: Crear una classe Persona
Crea una classe Persona amb les següents propietats: nom (string), edat (number) i ciutat (string). Afegeix un mètode saludar() que imprimeixi un missatge de salutació 
amb el nom de la persona. Crea diverses instàncies de la classe Persona i utilitza el mètode saludar() per mostrar els missatges de salutació per a cada persona. */

class Persona {
    constructor(
        public nom: string,
        public edat: number,
        public ciutat: string
    ) {}
    saludar(): void {
        console.log(`Hola ${this.nom}`);
    }
}

const david = new Persona("David", 20, "Hospitalet de Llobregat");
const sergio = new Persona("Sergio", 37, "Barcelona");

david.saludar();
sergio.saludar();

/* Exercici 2: Gestió de productes
Crea una classe Producte amb les següents propietats: codi (number), nom (string), preu (number) i quantitat (number).
 Afegeix mètodes per augmentar i disminuir la quantitat de productes disponibles i calcular el preu total 
 d'una determinada quantitat de productes. Crea diverses instàncies de la classe Producte i utilitza 
 els mètodes per gestionar els productes i calcular els preus totals.
 */

class Producte {
    constructor(
        public codi: number,
        public nom: string,
        public preu: number,
        public quantitat: number
    ) {}

    augmentarQuantitat(quantitatAAugmentar: number): void {
        this.quantitat += quantitatAAugmentar;
    }

    disminuirQuantitat(quantitatADisminuir: number): void {
        if (quantitatADisminuir <= this.quantitat) {
            this.quantitat -= quantitatADisminuir;
        } else console.log("No puedes quitar más productos de los que tienes");
    }

    calcularPreuTotal(): void {
        console.log(`El preu total és ${this.quantitat * this.preu}`);
    }
}

const teclat = new Producte(1, "Teclat", 35, 5);
const ratoli = new Producte(2, "Ratolí", 15, 3);

teclat.augmentarQuantitat(2);
teclat.calcularPreuTotal();

ratoli.disminuirQuantitat(4);
ratoli.calcularPreuTotal();

/* Exercici 3: Compte bancari
Crea una classe CompteBancari amb les següents propietats: titular (string), saldo (number) i un número d'identificació 
d'únic compte bancari (string o number). Afegeix mètodes per ingressar diners al compte, retirar diners del compte i mostrar el saldo actual.
 També pots afegir una propietat per registrar les transaccions realitzades (ingressos i retirades).
  Crea instàncies de la classe CompteBancari i utilitza els mètodes per gestionar els comptes i les transaccions. */

class CompteBancari {
    constructor(
        public titular: string,
        public saldo: number,
        public id: number,
        public registre: string[]
    ) {}

    ingressar(diners: number): void {
        this.saldo += diners;
        this.registre.push(`+ ${diners}€`);
    }

    retirar(diners: number): void {
        if (diners <= this.saldo) {
            this.saldo -= diners;
            this.registre.push(`- ${diners}€`);
        } else
            console.log(
                "No puedes retirar más dinero del que tienes en la cuenta"
            );
    }

    mostrarSaldo(): void {
        console.log(`El saldo total es de ${this.saldo}€`);
    }
}
