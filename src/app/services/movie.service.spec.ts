/*
import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('MovieService', () => {
  let service: MovieService;
  let http: HttpClient;

  beforeEach(async () => {
    TestBed.configureTestingModule({
    imports:[
      HttpClientTestingModule
    ]});
    service = TestBed.inject(MovieService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve chamar um GET com o endpoint correto', () => {
    const spy = spyOn(http, 'get').and.callThrough();
    service.getTest();
    expect(spy).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');

  })
});
*/
