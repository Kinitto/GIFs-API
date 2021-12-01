import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GifsService } from '../../services/gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  public busqueda: string;

  // Emite un evento de output a el componente padre
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
    this.gifservice.guardarHistorial();
  }


  private buscarGifsApi(): any {
    this.gifservice.buscarGifsApi(this.busqueda + "&limit=12").subscribe(
      res => {
        // Emite el resultado al componente Resultado
        // Se ejecuta despues de obtener los datos por la asincronía
        this.resultadoEvent.emit(res.data);
      }
    );
  }

  private crearBusqueda(): String  {
    return this.busqueda;
  }
}
