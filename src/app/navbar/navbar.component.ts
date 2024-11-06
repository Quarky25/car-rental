import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
clickCounter: number = 0;

clickEvent(): void {
  this.clickCounter += 10;
}
}
