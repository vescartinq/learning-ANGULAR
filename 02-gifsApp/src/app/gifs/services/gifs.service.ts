import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'KPeT2IO6lmQktxaxLNmLN1C0eG1TrUAR';
  private _historial: string[] = [];

  public resultados: any[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {} //Observable, misma acción que promesas(axios)

  buscarGifs(query: string = '') {
    query = query.trim().toLowerCase(); //valor en minuscula y sin espacios para evitar errores

    if (!this._historial.includes(query)) {
      //si no existe el valor añadido
      this._historial.unshift(query); //insertar el último al principio
      this._historial = this._historial.splice(0, 10); //mostrar 10 resultados
    }

    this.http
      .get(
        `http://api.giphy.com/v1/gifs/search?api_key=KPeT2IO6lmQktxaxLNmLN1C0eG1TrUAR&q=${query}&limit=10`
      )
      .subscribe((resp: any) => {
        console.log(resp.data);
        this.resultados = resp.data;
      });
  }
}
