import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform {
  transform(valor: string, enMayusculas: boolean = true): string {
    //     if (enMayusculas) {
    //       return valor.toUpperCase();
    //     }
    //     return valor.toLowerCase();
    return enMayusculas ? valor.toUpperCase() : valor.toLowerCase();
  }
}
