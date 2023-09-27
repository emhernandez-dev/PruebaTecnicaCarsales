import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodiosComponent } from './episodios.component';



@NgModule({
  declarations: [
    EpisodiosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EpisodiosComponent
  ]
})
export class EpisodiosModule { }
