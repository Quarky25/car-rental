import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { Car } from '../models/car.model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent implements OnInit {
cars: Car[] = [];

constructor(private carService: CarService) {}

ngOnInit(): void {
  this.cars = this.carService.getCars();
  
  
  
}

}
