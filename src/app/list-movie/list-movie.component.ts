import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MovieService} from '../movie.service';
import { Movie } from "../movie.model";

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {

  movies=[];
  private currentMovie:Movie;

  @Output() onSelectedMovie: EventEmitter<Movie>;

  constructor(private movieService: MovieService) { 
    this.onSelectedMovie=new EventEmitter();
  }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
    console.log(this.movies);
  }

  selectMovie(myMovie:Movie):void {
    console.log(myMovie);
    this.currentMovie=myMovie;
    this.onSelectedMovie.emit(myMovie);
  }

  isSekected(movie:Movie): boolean {
    if (!movie || !this.currentMovie) {
      return false;
    }
    return movie.title === this.currentMovie.title;
  }

}
