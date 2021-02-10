/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
  return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
  return a + b;
};

function sumar2(a: number, b: number): string {
  return (a + b).toString();
}

const resultado = sumar(10, 20);
const resultado2 = sumar2(10, 20);

// console.log(resultado); // obliga a tipo numero
// console.log(resultado2); //obliga a tipo string

//----------------------------------------------------------------------

// function multiplicar(numero: number, otroNumero?: number, base: number) {
//   return numero * base;
// } //Da error porque un arg obligatorio no se puede declarar detrás de uno opcional

function multiplicar2(numero: number, otroNumero?: number, base: number = 2) {
  return numero * base;
}

// const resultado3 = multiplicar(5, 10); //devuelve NaN porque base= undefined
const resultado4 = multiplicar2(5, 10); //devuelve 10, porque los arg opcionales se leen últimos -> number(5)*base(2)=10 ---otroNumero?

// console.log(resultado4);

//---------------------------------------------------------------------

interface PersonajeLOR {
  nombre: string;
  puntosVida: number;
  mostrarHp: () => void;
}

function curar(personaje: PersonajeLOR, curarPuntos: number): void {
  //void indica que la función no retorna nada
  personaje.puntosVida += curarPuntos;
  //   console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
  nombre: 'Strider',
  puntosVida: 50,
  mostrarHp() {
    console.log('Puntos de vida:', this.puntosVida);
  },
};

curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();
