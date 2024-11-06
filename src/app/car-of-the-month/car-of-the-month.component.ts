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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/2015_Mitsubishi_Lancer_Evolution_%28US%29.jpg/1200px-2015_Mitsubishi_Lancer_Evolution_%28US%29.jpg',
  };
}
