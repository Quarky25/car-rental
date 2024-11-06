import { Injectable } from '@angular/core';
import { Car } from '../models/car.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private cars: Car[] = [
    {
      id: 1,
      make: 'Toyota',
      model: 'Camry',
      year: 2022,
      pricePerDay: 50,
      price: 15000,
      imageUrl:
        'https://cdn.pixabay.com/photo/2022/04/24/12/26/car-7153508_640.jpg',
    },
    {
      id: 2,
      make: 'Honda',
      model: 'Accord',
      year: 2021,
      pricePerDay: 45,
      price: 17500,

      imageUrl:
        'https://hips.hearstapps.com/hmg-prod/images/2021-honda-accord-hybrid-109-edit-1604961241.jpg?crop=0.591xw:0.499xh;0.0962xw,0.501xh&resize=2048:*',
    },
    {
      id: 3,
      make: 'Mitsubishi',
      model: 'Evo',
      year: 2016,
      pricePerDay: 55,
      price: 45000,
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/10/04/05/17/mitsubishi-1713597_640.jpg',
    },
  ];
  getCars(): Car[] {
    return this.cars;
  }

  getCarbyPrice(price: number):  Car | undefined {
    return this.cars.find((car) => car.price === price);
  }

  getFeaturedCars(): Car[] {
    // Ensures that this returns an array, not undefined
    return this.cars.slice(0,3);
  }

  getCarsByCategory(category: string): Car[] {
    return this.cars.filter((car) => car.make === category )
  }

}


