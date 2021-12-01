import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  constructor(public giftsService: GifsService) { }

  ngOnInit(): void {
    for (let index = 0; index < this.giftsService.localHistorial().length; index++) {
      this.giftsService._historial.push(this.giftsService.localHistorial()[index]);
    }
  }


}
