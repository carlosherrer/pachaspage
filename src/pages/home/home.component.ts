import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showMap: boolean = false;

  toggleMap() {
    this.showMap = !this.showMap;
  }
}
