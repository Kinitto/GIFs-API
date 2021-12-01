import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html'
})
export class ResultadoComponent implements OnInit {

  // Recive el resultado del componente padre, que se usará en el html
  @Input() resultadoRecibido: any;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {

  }

}
