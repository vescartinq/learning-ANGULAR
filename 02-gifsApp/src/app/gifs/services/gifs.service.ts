import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'KPeT2IO6lmQktxaxLNmLN1C0eG1TrUAR';
  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string) {
    query = query.trim().toLowerCase(); //valor en minuscula y sin espacios para evitar errores

    if (!this._historial.includes(query)) {
      //si no existe el valor añadido
      this._historial.unshift(query); //insertar el último al principio
      this._historial = this._historial.splice(0, 10); //mostrar 10 resultados
    }

    console.log(this._historial);
  }
}
