/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number , base: number = 2): number { /*Primero se define variable, luego opcionales y finalmente variables con valores con defecto*/
    return numero * base;
}

/*
const resultadoSuma = sumar(8, 2);
const resultadoMultiplicar = multiplicar(10, 18, 5);

console.log(resultadoSuma);
console.log(resultadoMultiplicar);
*/

interface PersonajeLOR {
    nombre: string,
    pv: number,
    mostrarHp: () => void
}

function curar( personaje: PersonajeLOR, curarX: number): void {

    personaje.pv += curarX;
    
    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log('Puntos de vida: ', this.pv);
    }
}

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp();