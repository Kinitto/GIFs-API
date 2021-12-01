import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private url: string = 'https://api.giphy.com/v1/gifs/search?api_key=Y4aKFw4NMXVc3Hk08PQmDhAh5QAgG8fG&q='
  this: any;

  constructor(private http: HttpClient) { }

  public _historial: String[] = []

  public obtenerHistorial(): String[] {
    return this._historial;
  }

  public buscarGifs(query: String): void {
    this._historial.push(query);

  }

  // Llamada a la api rest
  public buscarGifsApi(busqueda: string): Observable<any> {
    return this.http.get(this.url + busqueda);
  }

  //guardar datos en el localStorage
  public guardarHistorial() {
    let historial = this._historial;
    localStorage.setItem('KeyHistorial', JSON.stringify(historial));
  }

  public localHistorial() {
    let gif = localStorage.getItem("KeyHistorial");

    if (gif == null) {
      return;
    }
    else {
      const datos = JSON.parse(gif);
      return datos;
    }
  }



}
