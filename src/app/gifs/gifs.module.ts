import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsComponent } from './gifs.component';



@NgModule({
  declarations: [
    GifsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GifsComponent
  ]
})
export class GifsModule { }
