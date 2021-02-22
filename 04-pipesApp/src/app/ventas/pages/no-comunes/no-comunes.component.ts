import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  // i18nSelect
  nombre1: string = 'Victor';
  genero1: string = 'masculino';
  nombre2: string = 'Noa';
  genero2: string = 'femenino';

  invitacionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  // i18Plural
  clientes0: string[] = [];
  clientes1: string[] = ['a'];
  clientes5: string[] = ['a', 'b', 'c', 'd', 'e'];

  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  cambiarCliente() {
    this.nombre1 = 'Esther';
    this.genero1 = 'femenino';
  }

  borrarCliente() {
    this.clientes5.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Victor',
    edad: 39,
    direccion: 'Barcelona',
  };

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Batman',
      vuela: false,
    },
    {
      nombre: 'Wonder Woman',
      vuela: false,
    },
  ];

  // Async Pipe
  miObservable = interval(2000); // 0,1,2,3,4,5,6

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa pasados 3,5 seg');
    }, 3500);
  });
}
