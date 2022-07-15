import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

getPosts(){
  return this.http.get('https://jsonplaceholder.typicode.com/posts');

}

getPosts2(){
  return this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments');

}

}
