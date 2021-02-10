/*
    ===== Código de TypeScript =====
*/

export interface Producto {
  desc: string;
  precio: number;
}

const telefono: Producto = {
  desc: 'Nokia A1',
  precio: 150,
};

const tablet: Producto = {
  desc: 'Ipad Air',
  precio: 350,
};

export function calculaPVP(productos: Producto[]): [number, number] {
  let total = 0;

  productos.forEach(({ precio }) => {
    total += precio;
  });

  return [total, total * 0.21];
}

const articulos = [telefono, tablet];

const [total, pvp] = calculaPVP(articulos);

console.log('Total: ', total);
console.log('PVP: ', pvp);
