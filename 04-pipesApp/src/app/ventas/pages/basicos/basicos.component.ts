import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'victor';
  nombreUpper: string = 'Victor';
  nombreCompleto: string = 'vIcTor EsCartIn';

  fecha: Date = new Date(); //la fecha de hoy
}
