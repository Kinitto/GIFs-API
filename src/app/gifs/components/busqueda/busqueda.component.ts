import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GifsService } from '../../services/gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  public busqueda: string;

  constructor(private gifservice: GifsService) {
    this.busqueda = '';
  }

  ngOnInit(): void {
    this.gifservice.obtenerLocalHistorial();
  }

  public agregarBusqueda() {
    // Guarda localStorage
    this.gifservice.guardarHistorial(this.busqueda);
    // Llama al servidor
    this.obtenerGifsApi();

  }

  public obtenerGifsApi(): any {
    this.gifservice.buscarGifsApi(this.busqueda + "&limit=12").subscribe(
      res => {
        // Guarda el resultado
        this.gifservice.guardarResultado(res.data);
      }
    );
  }

}
