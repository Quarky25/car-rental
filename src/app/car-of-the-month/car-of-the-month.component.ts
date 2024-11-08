import { Component } from '@angular/core';
import { Car } from '../models/car.model';

@Component({
  selector: 'app-car-of-the-month',
  templateUrl: './car-of-the-month.component.html',
  styleUrl: './car-of-the-month.component.css',
})
export class CarOfTheMonthComponent {
  carOfTheMonth: Car = {
    
      id:5,
      make: 'BMW',
      model: 'Clementine',
      year: 2020,
      pricePerDay: 500,
      price: 1000000,
      imageUrl: '/images/home-page/clementinesBMW.jpg'
    
  };
}
