import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Componentes:
import { ListaEpisodiosComponent } from './pages/lista-episodios/lista-episodios.component';
import { EpisodioRoutingModule } from './episodio-routing.module';
import { EpisodiosModule } from './components/episodios/episodios.module';
import { DetalleEpisodioModule } from './components/detalle-episodio/detalle-episodio.module';
import { PersonajesComponent } from './pages/personajes/personajes.component';


@NgModule({
  declarations: [
    ListaEpisodiosComponent,
    PersonajesComponent
  ],
  imports: [
    CommonModule, RouterModule,
    EpisodioRoutingModule,
    EpisodiosModule,
    DetalleEpisodioModule
  ]
})
export class EpisodioModule { }
