import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes:
import { LayoutRootComponent } from '../layout-root.component';
import { ListaEpisodiosComponent } from './pages/lista-episodios/lista-episodios.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutRootComponent,
    children: [
      { path: '', component: ListaEpisodiosComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodioRoutingModule { }
