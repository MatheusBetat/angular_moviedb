import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Movies} from "../models/movie.model";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  /*readonly testApi = 'https://jsonplaceholder.typicode.com/posts';

  public getTest():Observable<TestModel[]>{
    return this.http.get<TestModel[]>(this.testApi);

  }*/


  dataIniter = new EventEmitter<Movies[]>()

  public getMovies():Observable<Movies[]>{
    return this.http.get<Movies[]>('http://localhost:8080/v1/moviedb/movies');

  }


  public searchMovie(title: string):Observable<Movies[]>{
    return this.http.get<Movies[]>('http://localhost:8080/v1/moviedb/' + title, {
      params:{
        key: Math.random().toString(36).slice(2)
      }
    });
  }

  public saveMovie(movie: Movies[]){
    this.dataIniter.emit(movie)
  }

}


