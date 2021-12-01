import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs-service.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html'
})
export class ResultadoComponent implements OnInit {

  public listaGifs: any;

  constructor(private gifsService: GifsService) {
    gifsService.obtenerResultado().subscribe((res: any) => { this.listaGifs = res });
  }

  ngOnInit(): void {

    const ultimaBusqueda = this.gifsService.obtenerUltimaBusqueda();

    this.gifsService.buscarGifsApi(ultimaBusqueda + "&limit=12").subscribe(

      res => this.gifsService.guardarResultado(res.data )
    );
  }

}
