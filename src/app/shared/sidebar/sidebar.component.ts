import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {


  constructor(private giftsService: GifsService) { }

  ngOnInit(): void {

  }

  public obtenerListaReversa(): string[] {
    return this.giftsService.obtenerLocalHistorial().reverse();
  }

  public buscarPorItem(item: string): void {
    this.giftsService.buscarGifsApi(item).subscribe(res => this.giftsService.guardarResultado(res.data));
  }
}



