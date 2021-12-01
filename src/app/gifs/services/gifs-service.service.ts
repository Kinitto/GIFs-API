import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Historial } from '../interfaces/historial';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private url: string = 'https://api.giphy.com/v1/gifs/search?api_key=Y4aKFw4NMXVc3Hk08PQmDhAh5QAgG8fG&q='

  constructor(private http: HttpClient) { }

  private _historial: Historial[] = []

  public obtenerHistorial(): Historial[] {
    return this._historial;
  }

  public buscarGifs(query: Historial): void {
    this._historial.push(query);
  }

  // Llamada a la api rest
  public buscarGifsApi(busqueda: string): Observable<any> {
    return this.http.get(this.url + busqueda);
  }
}
