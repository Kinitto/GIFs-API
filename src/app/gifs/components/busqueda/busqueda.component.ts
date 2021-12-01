import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Historial } from '../../interfaces/historial';
import { GifsService } from '../../services/gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  public busqueda: string;

  @Output() resultadoEvent: EventEmitter<string>;

  constructor(private gifservice: GifsService) {
    this.busqueda = '';
    this.resultadoEvent = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public agregarBusqueda() {
    const busqueda = this.crearBusqueda()

    this.gifservice.buscarGifs(busqueda);

    // Llama al servidor
    this.buscarGifsApi();
  }


  private buscarGifsApi(): any {
    this.gifservice.buscarGifsApi(this.busqueda).subscribe(
      res => {
        // Emite el resultado al componente Resultado
        // Se ejecuta despues de obtener los datos por la asincronía
        this.resultadoEvent.emit(res.data);
      }
    );
  }


  private crearBusqueda(): Historial {
    return {
      contenido: this.busqueda
    }
  }
}
