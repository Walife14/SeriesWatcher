import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmOpenComponent } from './component/film-open/film-open.component';
import { FilmCarouselComponent } from './component/film-carousel/film-carousel.component';



@NgModule({
  declarations: [
    FilmOpenComponent,
    FilmCarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilmOpenComponent,
    FilmCarouselComponent
  ]
})
export class SharedModule { }
