/*
    ===== Código de TypeScript =====
*/

function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = 'new property';
    hello = 'override';
  };
}

@classDecorator
class MiSuperClase {
  public miPropiedad: string = 'ABC123';

  imprimir() {
    console.log('Hola Mundo');
  }
}

// Se imprimer el decorador, no la clase definida
console.log(MiSuperClase);

const miClase = new MiSuperClase();

// se imprime la clase definida al haberla asignado a una variable
console.log(miClase);
