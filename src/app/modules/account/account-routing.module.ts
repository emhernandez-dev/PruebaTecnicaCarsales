import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes:
import { LayoutRootComponent } from '../layout-root.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutRootComponent,
    children: [
      { path: 'episodios-favoritos', component: FavoritosComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
