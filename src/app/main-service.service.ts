import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor( private http: HttpClient) { }


  getUserList() {
    return this.http.get<any>('https://fakestoreapi.com/users?limit=25');
  }

  getDoggo() {
    return this.http.get<any>('https://dog.ceo/api/breeds/image/random');
  }

}
