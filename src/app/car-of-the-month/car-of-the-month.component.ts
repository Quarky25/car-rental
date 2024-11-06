import { Component } from '@angular/core';
import { Car } from '../models/car.model';

@Component({
  selector: 'app-car-of-the-month',
  templateUrl: './car-of-the-month.component.html',
  styleUrl: './car-of-the-month.component.css',
})
export class CarOfTheMonthComponent {
  carOfTheMonth: Car = {
    id: 3,
    make: 'Mitsubishi',
    model: 'Evo',
    year: 2016,
    pricePerDay: 55,
    price: 45000,
    imageUrl:
      'https://cdn.pixabay.com/photo/2016/10/04/05/17/mitsubishi-1713597_640.jpg',
  };
}
