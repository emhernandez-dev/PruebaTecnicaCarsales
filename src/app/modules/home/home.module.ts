import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes:
import { IndexComponent } from './pages/index/index.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
