import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CarOfTheMonthComponent } from './car-of-the-month/car-of-the-month.component';
import { CarListComponent } from './car-list/car-list.component';


const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "about", component: AboutUsComponent},
  {path: "car", component: CarOfTheMonthComponent},
  {path: "cars", component: CarListComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
