/*
    ===== Código de TypeScript =====
*/

class Heroe1 {
  private alterEgo: string; //solo visible dentro de esta clase
  public edad: number; // fuera de la clase se podrá ver la propiedad
  static nombreReal: string; // se puede acceder acceder a la propiedad de la clase desde fuera de la clase (Heroe.nombreReal)
}

// En una interface NO podemos incluir funciones para obtener resultados, en una class SI
class Heroe2 {
  alterEgo: string;
  edad: number;
  nombreReal: string;

  imprimirNombre() {
    return this.alterEgo + ' ' + this.nombreReal;
  }
}

class Heroe3 {
  alterEgo: string;
  edad: number;
  nombreReal: string;

  //   El constructor es una función que ejecutamos cuando llamamos a la class
  constructor(alterEgo: string) {
    console.log('Inicializando un personaje:');
    this.alterEgo = alterEgo;
  }
}

class Heroe4 {
  //   alterEgo: string;
  //   edad: number;
  //   nombreReal: string;

  // Podemos declarar los atributos directamente en los argumentos del constructor
  constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal: string
  ) {
    console.log('Inicializando un personaje:');
    this.alterEgo = alterEgo;
  }
}

const ironman = new Heroe4('Ironman', 45, 'Tony Stark');

console.log(ironman);

// ---------------------------------

class PersonaNormal {
  constructor(public nombre: string, public direccion: string) {}
}

// Extends=> similar a populete, nos permite añadir atributos a la clase
class Heroe extends PersonaNormal {
  constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal: string
  ) {
    super(nombreReal, 'Asgard');
  }
}

const thor = new Heroe('Thor', 35, 'Thor Odinsson');

console.log(thor);
