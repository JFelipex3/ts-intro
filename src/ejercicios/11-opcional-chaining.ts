/*
    ===== Código de TypeScript =====
*/

interface Pasajero{
    nombre: string;
    hijos?: string[]; // Propiedad opcional
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia', 'Gabriel']
}

function imprimeHijos( pasajero: Pasajero): void {
    
    const cuantosHijos = pasajero.hijos?.length || 0; // Evalúa si tiene hijos, en caso de no tener es Undifined y se muestra el cero. el simbolo ? indica que se debe evaluar si tiene la propiedad

    console.log(cuantosHijos);
}

imprimeHijos(pasajero1);