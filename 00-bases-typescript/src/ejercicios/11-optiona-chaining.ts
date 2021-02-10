/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
  nombre: string;
  hijos?: string[];
}

const pasajero1: Pasajero = {
  nombre: 'Fernando',
};

const pasajero2: Pasajero = {
  nombre: 'Melisa',
  hijos: ['Natalia', 'Gabriel'],
};

function imprimeHijos(pasajero: Pasajero): void {
  // const cuantosHijos = pasajero.hijos.length;
  const cuantosHijos = pasajero.hijos?.length || 0; //->  Encadenamiento opcional

  console.log(cuantosHijos);
}

// imprimeHijos(pasajero2); // funciona porque si tiene la propiedad hijos
// imprimeHijos(pasajero1); // no funciona porque no tiene la propiedad hijos-> undefined
imprimeHijos(pasajero2);
imprimeHijos(pasajero1);
