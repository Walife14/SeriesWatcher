import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmOpenComponent } from './component/film-open/film-open.component';



@NgModule({
  declarations: [
    FilmOpenComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilmOpenComponent
  ]
})
export class SharedModule { }
