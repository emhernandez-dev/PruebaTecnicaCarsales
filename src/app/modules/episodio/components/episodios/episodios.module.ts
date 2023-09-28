import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodiosComponent } from './episodios.component';
import { DetalleEpisodioModule } from '../detalle-episodio/detalle-episodio.module';



@NgModule({
  declarations: [
    EpisodiosComponent
  ],
  imports: [
    CommonModule, DetalleEpisodioModule
  ],
  exports: [
    EpisodiosComponent
  ]
})
export class EpisodiosModule { }
