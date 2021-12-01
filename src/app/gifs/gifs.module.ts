import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsComponent } from './gifs.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    GifsComponent,
    BusquedaComponent,
    ResultadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    GifsComponent
  ]
})
export class GifsModule { }
