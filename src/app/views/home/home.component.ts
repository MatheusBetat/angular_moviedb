import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Movies} from "../../models/movie.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public filmes$: Observable<Movies[]>;
  public movie!: Movies[] | any;
  public movieSearch: Movies[];

  constructor(private movieService: MovieService) {
  }

  public previous(): void {

    this.movie.unshift(this.movie.pop());
  }

  public next(): void {
    this.movie.push(this.movie.shift());
  }

  ngOnInit(): void {

    this.filmes$ = this.movieService.getMovies();
    this.filmes$.subscribe(data => {
      this.movie = data

    })

  }
}
