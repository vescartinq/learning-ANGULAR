/*
    ===== Código de TypeScript =====
*/

// Los tipo GENERICOS nos permiten decidir el tipo de dato a devolver
// Se definen como <T> (T es una nomenclatura estandar)

function queTipoSoy<T>(argumento: T) {
  return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(100);
let soyArray = queTipoSoy([1, 2, 3, 4, 5, 6, 7, 8]);

let soyExplicito = queTipoSoy<number>(100); //obligamos a que el argumento sea un number
