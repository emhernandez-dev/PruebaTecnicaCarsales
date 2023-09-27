import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes:
import { ListaEpisodiosComponent } from './pages/lista-episodios/lista-episodios.component';
import { EpisodioRoutingModule } from './episodio-routing.module';
import { EpisodiosModule } from './components/episodios/episodios.module';


@NgModule({
  declarations: [
    ListaEpisodiosComponent
  ],
  imports: [
    CommonModule,
    EpisodioRoutingModule,
    EpisodiosModule
  ]
})
export class EpisodioModule { }
