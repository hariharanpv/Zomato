import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  getResturantUrl ="https://developers.zomato.com/api/v2.1/search?count=10&lat=11.0168&lon=76.9558";
 addFavouriteUrl = "/api/restaurant/add-favourite";
  favouriteData: Object;

  constructor(private http:HttpClient) { }

  header = new HttpHeaders({
    'user-key' : '527fc6d7f838da0dd7c41d87f0ea8e1d'
  })

  getRestaurantList() : Observable<any>{

    return this.http.get<any>(this.getResturantUrl,{
      headers:this.header
    });

    

  }

  addFavourite(restaurant: any): Observable<any> {

    this.favouriteData = {};
    this.favouriteData['name'] = restaurant.name;
    this.favouriteData['thumb'] = restaurant.thumb;
    this.favouriteData['location'] = restaurant.location;


    return this.http.post<any>(this.addFavouriteUrl, this.favouriteData);
  }
}
