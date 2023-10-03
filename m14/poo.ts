class Usr {
    //Creació dels atributs de la classe
    email: string;
    nom: string;
    ciutat: string;

    //Creació del constructor de la classe
    constructor(email: string, nom: string, ciutat: string) {
        this.email = email;
        this.nom = nom;
        this.ciutat = ciutat;
    }
}

const fran = new Usr("f@f.com", "Francesc", "Barcelona");

class Usr2 {
    protected curs: number = 1;
    constructor(
        public email: string,
        public nom: string,
        private ciutat: string
    ) {
        this.email = email;
        this.nom = nom;
        this.ciutat = ciutat;
    }

    //Getters and setters
    get getEmail(): string {
        return `${this.email}`;
    }

    get getCurs(): number {
        return this.curs;
    }

    set setCurs(cursNum: number) {
        if (cursNum <= 1) {
            throw new Error("El número de cursos ha de ser superior a 1");
        }
        this.curs = cursNum;
    }
}

//Herència

class AltreUsr extends Usr2 {
    esFamilia: boolean;
    changeCourseCount() {
        this.curs = 4;
    }
}

//Interfaces

interface ferFoto {
    cameraMode: string;
    filter: string;
    burst: number;
}

interface Story {
    createStory(): void;
}

//Una clase abstracta és una clase de la qual no genero objectes

class Instagram implements ferFoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {}

    createStory(): never {
        throw new Error("Method not implemented");
    }
}

//Classe abstracta (No se puede crear una instancia de una clase abstracta)

abstract class TakePhoto {
    constructor(public cameraMode: string, public filter: string) {}
    abstract getSepia(): void;
}

//const m14 = new TakePhoto("test", "test");

class Instagram2 extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter);
    }
    getSepia(): void {
        console.log("Sepia");
    }
}
