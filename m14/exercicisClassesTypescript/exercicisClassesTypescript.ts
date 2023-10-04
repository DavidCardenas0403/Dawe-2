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

ratoli.disminuirQuantitat(1);
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
        public id: number = Date.now(),
        public registre: string[] = []
    ) {}

    ingressar(diners: number): void {
        this.saldo += diners;
        this.registre.push(`+ ${diners}€`);
    }

    retirar(diners: number): void {
        if (diners <= this.saldo) {
            this.saldo -= diners;
            this.registre.push(`- ${diners}€`);
        } else {
            console.log(
                "No puedes retirar más dinero del que tienes en la cuenta"
            );
        }
    }

    mostrarSaldo(): void {
        console.log(`El saldo total es de ${this.saldo}€`);
    }

    mostrarRegistre(): void {
        console.log(this.registre);
    }
}

const compte1 = new CompteBancari("David", 500);
const compte2 = new CompteBancari("Sergio", 1000);

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

/* Exercici 4: Vehicles i Cotxes

Crea una jerarquia de classes relacionades amb vehicles. Tindràs una classe abstracta Vehicle que tindrà les propietats comunes a tots els vehicles, com ara marca, model i any.
 Aquesta classe tindrà també un mètode abstracte mostrarInfo() que serà implementat per les subclasses concretes.

A continuació, crea dues classes concretes que heretin de Vehicle: Cotxe i Motocicleta. Cada una d'aquestes classes tindrà les seves pròpies propietats i mètodes específics:

Cotxe tindrà les propietats addicionals nombrePortes i esAutomatic.
Motocicleta tindrà la propietat addicional cilindrada.

Defineix una interfície anomenada Conductor amb una propietat nom i un mètode conduir(). Les dues classes concretes (Cotxe i Motocicleta) hauran de ser capaces 
d'implementar aquesta interfície.

Finalment, crea instàncies de les classes Cotxe i Motocicleta, omple les seves dades i crida els mètodes per mostrar la informació dels vehicles i els noms dels conductors. */

abstract class Vechicle {
    constructor(
        public marca: string,
        public model: string,
        public any: number
    ) {}
    abstract mostrarInfo(): void;
}

interface Conductor {
    nom: string;

    conduir(): void;
}

class Cotxe extends Vechicle implements Conductor {
    constructor(
        public nom: string,
        public marca: string,
        public model: string,
        public any: number,
        public nombrePortes: number,
        public esAutomatic: boolean
    ) {
        super(marca, model, any);
    }

    mostrarInfo(): void {
        console.log(
            `Marca: ${this.marca}\nModel: ${this.model}\nAny: ${
                this.any
            }\nNº portes: ${this.nombrePortes}\nAutomàtic: ${
                this.esAutomatic ? "Sí" : "No"
            }`
        );
    }

    conduir(): void {
        console.log(`${this.nom} està conduint`);
    }
}

class Moto extends Vechicle implements Conductor {
    constructor(
        public nom: string,
        public marca: string,
        public model: string,
        public any: number,
        public cilindrada: number
    ) {
        super(marca, model, any);
    }

    mostrarInfo(): void {
        console.log(
            `Marca: ${this.marca}\nModel: ${this.model}\nAny: ${this.any}\nCilindrada: ${this.cilindrada}`
        );
    }

    conduir(): void {
        console.log(`${this.nom} està conduint`);
    }
}

const tesla = new Cotxe("Elon Musk", "Tesla", "Model S", 2018, 4, true);
const z900 = new Moto("Marc Màrquez", "Kawasaki", "Z900", 2016, 900);

tesla.mostrarInfo();
tesla.conduir();

z900.mostrarInfo();
z900.conduir();
