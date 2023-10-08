import { Component, Input, OnInit } from '@angular/core';

interface episode {
  title: string;
  photoUrl: string;
  duration: number;
  description: string;
  episode: number;
}

@Component({
  selector: 'app-film-open',
  templateUrl: './film-open.component.html',
  styleUrls: ['./film-open.component.css']
})
export class FilmOpenComponent implements OnInit {

  @Input() film: String[] = []

  // create a new service that would fetch episodes based on the title of the series above
  // for now the array of objects below will work with 3 episodes
  episodes: Array<episode> = [
    { title: 'pilot', photoUrl: 'photoUrlWebsite.com/episode1', duration: 48, description: 'The first episode', episode: 1 },
    { title: 'The struggle', photoUrl: 'photoUrlWebsite.com/episode2', duration: 52, description: 'The second episode', episode: 2 },
    { title: 'The fame', photoUrl: 'photoUrlWebsite.com/episode3', duration: 43, description: 'The third episode', episode: 3 }
  ]

  constructor() { }

  ngOnInit() {
    document.body.style.overflow = 'hidden';
    document.body.style.maxHeight = '100svh'
    // window.scrollTo(0,0)
  }

}
