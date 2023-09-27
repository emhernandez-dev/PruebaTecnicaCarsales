import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { AccountRoutingModule } from './account-routing.module';



@NgModule({
  declarations: [
    FavoritosComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
