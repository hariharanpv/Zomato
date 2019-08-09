import { Component, OnInit } from '@angular/core';
import {RestaurantService} from '../restaurant-service.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  restaurantList : any;

  name : string = "hotchips"

  constructor(private restaurantService : RestaurantService) { }

  ngOnInit() {
    this.getRestuarant();
  }
  
  getRestuarant():void{
   this.restaurantService.getRestaurantList().subscribe(list=>{
     this.restaurantList = list.restaurants;
     console.log(this.restaurantList);
   })
   
  }
}
