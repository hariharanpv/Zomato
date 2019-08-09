import { Component, OnInit, Input } from '@angular/core';
import { RestaurantService } from '../restaurant-service.service';

@Component({
  selector: 'app-resturant-card',
  templateUrl: './resturant-card.component.html',
  styleUrls: ['./resturant-card.component.scss']
})
export class ResturantCardComponent implements OnInit {

@Input() restaurant : any;

  constructor(private restaurantsService: RestaurantService) { }

  ngOnInit() {
  }

  addfavourite(){

    this.restaurantsService.addFavourite(this.restaurant).subscribe(data =>{
  console.log(data);
    });

  }
}