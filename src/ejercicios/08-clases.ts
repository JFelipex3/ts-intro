/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {

    constructor( 
        public nombre: string,
        public direccion?: string
    ){}
}

class Heroe extends PersonaNormal{

    // Definir propiedades de la case con el constructor - Usado para ahorrar líneas de código
    constructor(
        public alterEgo: string,
        public edad: number,
        nombreReal: string
    ) {
        super(nombreReal);
    }
}

const ironman = new Heroe('Ironman', 45, 'Tony Stark');

console.log(ironman);