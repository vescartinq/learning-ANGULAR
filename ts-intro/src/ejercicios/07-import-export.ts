import { Producto, calculaPVP } from './06-destructuracion-funcion';
/*
    ===== Código de TypeScript =====
*/

const carritoCompras: Producto[] = [
  {
    desc: 'Telefono1',
    precio: 100,
  },
  {
    desc: 'Telefono2',
    precio: 150,
  },
];

const [total, pvp] = calculaPVP(carritoCompras);

console.log('Total:', total);
console.log('PVP:', pvp);
