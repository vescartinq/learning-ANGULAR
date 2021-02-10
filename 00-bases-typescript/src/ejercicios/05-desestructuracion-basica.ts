/*
    ===== Código de TypeScript =====
*/

// -------------DESTRUCTURING OBJETOS-------------------

interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  year: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: 'Mess',
  detalles: {
    autor: 'Ed Sheeran',
    year: 2015,
  },
};

const autor = 'Fulano';

// const { volumen, segundo, cancion, detalles: {autor: autorDetalle} } = reproductor;
// const { autor } = detalles;
// otra forma de desestructurar atributos de objetos anidados

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor: autorDetalle } = detalles; //renombramos atributo "autor" para que no haga conflicto con la constante "autor"

// console.log('El volumen actual es de: ', volumen);
// console.log('El segundo actual es de: ', segundo);
// console.log('La canción actual es de: ', cancion);
// console.log('El autor es: ', autor);
// console.log('El autorDetalle es: ', autorDetalle);

// -------------DESTRUCTURING ARRAYS-------------------

const dragonBallZ: string[] = ['Goku', 'Vegeta', 'Trunks'];
// const [p3] = dragonBallZ;

// console.log('Personaje 1:' + p3); //con los [] importa la posición, no la nomenclatura
// console.log('Personaje 2:' + dragonBallZ[1]);
// console.log('Personaje 3:' + dragonBallZ[2]);

const [, , p3] = dragonBallZ; //solo quiero Trunks

// console.log('Personaje 1:' + p1);
// console.log('Personaje 2:' + p2);
console.log('Personaje 3:' + p3);
