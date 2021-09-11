/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

interface Personaje {
    nombre: string,
    hp: number,
    habilidades: string[],
    puebloNatal?: string /*Se indica ? para informar que propiedad o variable es opcional*/
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.log(personaje);