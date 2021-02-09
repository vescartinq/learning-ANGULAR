/*
    ===== Código de TypeScript =====
*/

let habilidades: (string | boolean | number)[] = ['Bash', 'Counter', 'Healing'];
// habilidades.push(100); // Genera error porque el array se declara como contenedor de string, no podemos asignar número

//------------------

//Para trabajar con objetos declaramos una interface (plantilla del objeto) -> No aparece en consola
interface Personaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  puebloNatal?: string; //signo ? indica que este atributo es opcional, no tiene por qué declararse al crear personaje
}

const personaje: Personaje = {
  nombre: 'Strider',
  hp: 100,
  habilidades: ['Bash', 'Counter', 'Healing'],
};

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);
