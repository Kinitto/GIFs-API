import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private url: string = 'https://api.giphy.com/v1/gifs/search?api_key=Y4aKFw4NMXVc3Hk08PQmDhAh5QAgG8fG&q='
  private _listaGifts: Subject<any[]> = new Subject();

  constructor(private http: HttpClient) { }

  public obtenerUltimaBusqueda(): string {
    return this.obtenerLocalHistorial()[this.obtenerLocalHistorial().length - 1];
  }

  // RESULTADO
  public guardarResultado(listaGifs: any[]): void {
    this._listaGifts.next(listaGifs);
  }
  public obtenerResultado(): Observable<any[]> {
    return this._listaGifts.asObservable();
  }

  // API
  // Llamada a la api rest
  public buscarGifsApi(busqueda: string): Observable<any> {
    return this.http.get(this.url + busqueda);
  }

  // LOCAL STORAGE
  /**
   * Guarda datos en el localStorage
   */
  public guardarHistorial(busqueda: string): void {
    const historial: any[] = this.obtenerLocalHistorial();
    historial.push(busqueda);
    localStorage.setItem('KeyHistorial', JSON.stringify(historial));
  }

  /**
   * Obatiene datos del localStorage
   * @returns
   */
  public obtenerLocalHistorial(): string[]  {
    return JSON.parse(localStorage.getItem("KeyHistorial")!);
  }
}
