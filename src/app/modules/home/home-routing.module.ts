import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { IndexComponent } from './pages/index/index.component';
import { LayoutRootComponent } from '../layout-root.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutRootComponent,
    children: [
      { path: '', component: IndexComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
