import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/data/services/film.service';
interface filmInterface {
  id: number,
  title: string,
  photoUrl: string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  films: filmInterface[] = []
  titles: string[] = ['Made in the UK', 'Continue watching for Lucas', 'Trending Now', 'Popular on SeriesWatcher', 'Gangster TV Dramas', 'Action & Adventure', 'My List', 'Only on SeriesWatcher', 'Binge-worthy' ]
  titleIds: string[] = ['title1', 'title2', 'title3', 'title4', 'title5', 'title6', 'title7', 'title8', 'title9']

  hasSelectedFilm: boolean = false;

  constructor(private filmService: FilmService) {}

  ngOnInit() {}

  scrollFilms(direction: string, event: Event) {
    // saving the clicked button
    const { target } = event;

    const elementToScroll = (target as HTMLImageElement).parentNode!.parentNode as HTMLDivElement

    let sizeOfElement = (elementToScroll as HTMLDivElement).clientWidth

    console.log((elementToScroll as HTMLDivElement).clientWidth)

    direction === 'right' ? elementToScroll?.scrollBy({ left: sizeOfElement, behavior: 'smooth'}) : elementToScroll?.scrollBy({ left: -sizeOfElement, behavior: 'smooth'})
    
  }

  closeFilm() {
    this.hasSelectedFilm = false;
    document.body.style.overflow = 'scroll'
    document.body.style.maxHeight = 'initial'
  }
  
  triggerFilmClick(filmObj: string) {
    console.log("We got back the film", filmObj)
    this.hasSelectedFilm = true
  }

}
