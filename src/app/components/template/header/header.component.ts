import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import { debounceTime, Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MovieService} from "../../../services/movie.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges, OnDestroy {

  subscription?: Subscription;

  constructor(private formBuilder: FormBuilder,
              private movieService: MovieService){

}
  public form: FormGroup;

  public createForm(){
    this.form = this.formBuilder.group({
      search: ['', Validators.required]
    });

  }

  ngOnInit(): void {
    this.createForm()
    this.subscription =
    this.form.get('search')?.valueChanges.pipe(debounceTime(1000)).subscribe(data => this.movieService.searchMovie(data)
      .subscribe(movie => this.movieService.saveMovie(movie)))
  }

  ngOnChanges(): void {

  }

  ngOnDestroy(): void {

    this.subscription?.unsubscribe();
  }

}
