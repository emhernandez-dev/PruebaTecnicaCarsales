import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-episodio',
  templateUrl: './detalle-episodio.component.html',
  styleUrls: ['./detalle-episodio.component.css']
})
export class DetalleEpisodioComponent {

  @Input() detalle: any;

}
