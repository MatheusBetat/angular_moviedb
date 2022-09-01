import {Component, Input, OnInit} from '@angular/core';
import {Movies} from "../models/movie.model";

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
  @Input() movies: Movies[];

}
