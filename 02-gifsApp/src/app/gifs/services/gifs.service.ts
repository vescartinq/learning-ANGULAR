import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'KPeT2IO6lmQktxaxLNmLN1C0eG1TrUAR';
  private servicioUrl = 'http://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || []; //Muestra directamente la info de localStorage
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  } //Observable, misma acción que promesas(axios); solo se ejecuta la primera vez que es llamado

  buscarGifs(query: string = '') {
    query = query.trim().toLowerCase(); //valor en minuscula y sin espacios para evitar errores

    if (!this._historial.includes(query)) {
      //si no existe el valor añadido
      this._historial.unshift(query); //insertar el último al principio
      this._historial = this._historial.splice(0, 10); //mostrar 10 resultados

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http
      .get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params }) //consulta a la API
      .subscribe((resp) => {
        console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
  }
}
