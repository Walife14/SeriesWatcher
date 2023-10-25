import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-film-carousel',
  templateUrl: './film-carousel.component.html',
  styleUrls: ['./film-carousel.component.css']
})
export class FilmCarouselComponent implements OnInit {

  @Output() dataToSend = new EventEmitter<string>();

  // inputs
  @Input() title!: string;
  @Input() titleId?: string;

  items: any = [
    {imgUrl: 'https://wallpapersmug.com/download/1600x900/6e645c/captain-marvel-movie-poster.jpg'},
    {imgUrl: 'https://i0.wp.com/blog.son-video.com/wp-content/uploads/2021/03/ZackSnyders_JusticeLeague_1200.jpg?fit=1200%2C675&ssl=1'},
    {imgUrl: 'https://wallpapersmug.com/download/1600x900/526278/justice-league-fan-art-poster-4k-8k.jpg'},
    {imgUrl: 'https://i0.wp.com/blog.son-video.com/wp-content/uploads/2021/03/ZackSnyders_JusticeLeague_1200.jpg?fit=1200%2C675&ssl=1'},
    {imgUrl: 'https://wallpapersmug.com/download/1600x900/6e645c/captain-marvel-movie-poster.jpg'},
    {imgUrl: 'https://wallpapersmug.com/download/1600x900/6e645c/captain-marvel-movie-poster.jpg'},
    {imgUrl: 'https://i0.wp.com/blog.son-video.com/wp-content/uploads/2021/03/ZackSnyders_JusticeLeague_1200.jpg?fit=1200%2C675&ssl=1'},
    {imgUrl: 'https://wallpapersmug.com/download/1600x900/6e645c/captain-marvel-movie-poster.jpg'},
    {imgUrl: 'https://wallpapersmug.com/download/1600x900/6e645c/captain-marvel-movie-poster.jpg'},
    {imgUrl: 'https://i0.wp.com/blog.son-video.com/wp-content/uploads/2021/03/ZackSnyders_JusticeLeague_1200.jpg?fit=1200%2C675&ssl=1'},
    {imgUrl: 'https://wallpapersmug.com/download/1600x900/6e645c/captain-marvel-movie-poster.jpg'},
    {imgUrl: 'https://wallpapersmug.com/download/1600x900/6e645c/captain-marvel-movie-poster.jpg'},
    {imgUrl: 'https://i0.wp.com/blog.son-video.com/wp-content/uploads/2021/03/ZackSnyders_JusticeLeague_1200.jpg?fit=1200%2C675&ssl=1'},
    {imgUrl: 'https://wallpapersmug.com/download/1600x900/6e645c/captain-marvel-movie-poster.jpg'}
  ]

  constructor() { }

  ngOnInit() {
  }

  sendBackData(filmUrl: string) {
    this.dataToSend.emit(filmUrl)
  }

  moveCarousel(direction: string) {
    let carousel = document.querySelector(`#${this.titleId}`)

    let sizeOfElement = carousel!.clientWidth
    
    let moveBy: number;

    direction === 'right' ? moveBy = sizeOfElement * 2/3 : moveBy = -sizeOfElement;

    carousel?.scrollBy({
      left: moveBy,
      behavior: 'smooth'
    })

    setTimeout(() => {
      if (carousel!.clientWidth + carousel!.scrollLeft >= carousel!.scrollWidth ) {
        console.log("we hit the left")
      }
    }, 500)
  }

}
