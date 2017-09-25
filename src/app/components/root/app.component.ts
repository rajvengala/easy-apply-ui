import {Component} from '@angular/core';
import {GetDetailsService} from '../../services/get-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cities: string[];
  public selectedCity: string;
  public localities: string[];
  public selectedLocality: string;
  public filteredLocality: string[];
  public schools: string[];
  public selectedSchool: string;

  constructor(private citiesService: GetDetailsService) {
    this.cities = [];
    this.selectedCity = '';
    this.localities = [];
    this.selectedLocality = '';
    this.filteredLocality = [];
    this.schools = [];
    this.selectedSchool = '';
  }

  ngOnInit(): void {
    const citiesPromise = this.citiesService.getAllCities();
    citiesPromise.then(citiesList => {
      this.cities = citiesList;
    }).catch(error => {

    });
  }


  fetchLocalities(): void {
    const localitySearchStr = this.selectedLocality;
    if (localitySearchStr.length === 3) {
      const localitiesPromise = this.citiesService.getAllLocalities(this.selectedCity);
      localitiesPromise.then(localitiesList => {
        this.localities = localitiesList;
      }).catch(error => {

      })
    }
  }

  filterLocalities(localityChars): void {
    const localitiesList = Array.from(this.localities);
    const rawFilteredLocalities = localityChars ? localitiesList.filter(locality =>
    locality.indexOf(localityChars) !== -1) : localitiesList;
    this.filteredLocality = rawFilteredLocalities.sort(function (locality1, locality2) {
      return locality1.toLowerCase() > locality2.toLowerCase() ? 1 :
        (locality1.toLowerCase() < locality2.toLowerCase() ? -1 : 0);
    });
  }


  onLocalitySelected(locality: string): void {
    const schoolsPromise = this.citiesService.getAllSchools(this.selectedCity, locality);
    schoolsPromise.then(schoolsList => {
      this.schools = schoolsList;
    }).catch(error => {

    })
  }

  applySchool(schoolId: string): void {
    console.log(schoolId)
  }
}
