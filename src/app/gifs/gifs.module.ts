import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsComponent } from './gifs.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ResultadoComponent } from './components/resultado/resultado.component';



@NgModule({
  declarations: [
    GifsComponent,
    BusquedaComponent,
    ResultadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GifsComponent
  ]
})
export class GifsModule { }
