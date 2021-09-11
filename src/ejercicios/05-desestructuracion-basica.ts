/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles
}

interface Detalles {
    autor: string,
    anyo: number
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anyo: 2015
    }
}

// Desestructuración de Objetos se basa en el nombre.

const {volumen, segundo, cancion, detalles} = reproductor;
const {autor} = detalles; // Se puede cambiar nombre de propiedad con autor: autorDetalle

console.log('El volumen actual de: ', volumen);
console.log('El segundo actual de: ', segundo);
console.log('La canción actual de: ', cancion);
console.log('El autor es: ', autor);

// Desestructuración de arreglos se basa en la posición 

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [p1, p2, p3 ] = dbz;
const [ , , pj3] = dbz; // Si solo quisiera el tercer valor

// Console basado en posición
console.log('Personaje 1: ', dbz[1]);
console.log('Personaje 2: ', dbz[2]);
console.log('Personaje 3: ', dbz[3]);

// Console con variables de desestructuración
console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);