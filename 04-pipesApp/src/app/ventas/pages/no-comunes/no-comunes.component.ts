import { Component } from '@angular/core';

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
  clientes2: string[] = ['a', 'b'];
  clientes5: string[] = ['a', 'b', 'c', 'd', 'e'];

  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    other: 'tenemos # clientes esperando',
  };
}
