import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cities: string[];
  public selectedCity: string;

  constructor() {
    this.cities = ['Bangalore', 'Chennai', 'Hyderabad'];
    this.selectedCity = '';
  }
}
