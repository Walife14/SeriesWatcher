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
  titles: String[] = ['Made in the UK', 'Continue watching for Lucas', 'Trending Now', 'Popular on SeriesWatcher', 'Gangster TV Dramas', 'Action & Adventure', 'My List', 'Only on SeriesWatcher', 'Binge-worthy' ]

  hasSelectedFilm: boolean = true;

  constructor(private filmService: FilmService) {}

  ngOnInit() {
    this.filmService.getFilms().subscribe((films) => {
      this.films = films as filmInterface[]
      console.log(this.films[0])
    })
  }

  closeFilm() {
    this.hasSelectedFilm = false;
    document.body.style.overflow = 'scroll'
    document.body.style.maxHeight = 'initial'
  }

}
