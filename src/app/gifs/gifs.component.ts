import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html'
})
export class GifsComponent implements OnInit {

  // Almacena la información del output, que también se usara para el input del componente resultado
  public resultado: any;

  constructor() {
 }

  ngOnInit(): void {
  }

}
