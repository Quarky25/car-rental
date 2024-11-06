import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car.model';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
// ! defining featured cars that has the type Car and categories to implement a filter
export class HomePageComponent implements OnInit {
 featuredCars: Car[] = []; //! Array for Car objects
 categories : string [] = []

 constructor(private carService: CarService) {}

 ngOnInit(): void {
  this.featuredCars = this.carService.getFeaturedCars();
 }

 filterByCategory(category: string): void {
  this.featuredCars = this.carService.getCarsByCategory(category);
 }

}
