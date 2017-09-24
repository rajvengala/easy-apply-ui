import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Commons} from "../utils/commons.class";

@Injectable()
export class CitiesService {

  private requestOptions: RequestOptions;

  constructor(private http: Http) {
    this.requestOptions = Commons.getRequestOptions();
  }

  getAllCities(): Promise<any> {
    return this.http.get('http://easyapply.online/api/cities', this.requestOptions)
      .toPromise()
      .then(this.extractAllCities)
      .catch(this.handleError);
  }

  private extractAllCities(response: Response): Promise<any> {
    const parsedResponseObj = response.json();
    return Promise.resolve(parsedResponseObj);
  }

  getAllLocalities(cityName: string): Promise<any> {
    return this.http.get(`http://easyapply.online/api/cities/${cityName}/localities`, this.requestOptions)
      .toPromise()
      .then(this.extractAllLocalities)
      .catch(this.handleError);
  }

  private extractAllLocalities(response: Response): Promise<any> {
    const parsedResponseObj = response.json();
    return Promise.resolve(parsedResponseObj);
  }

  getAllSchools(cityName: string, locality: string): Promise<any> {
    return this.http.get(`http://easyapply.online/api/cities/${cityName}/localities/${locality}/schools`, this.requestOptions)
      .toPromise()
      .then(this.extractAllSchools)
      .catch(this.handleError);
  }

  private extractAllSchools(response: Response): Promise<any> {
    const parsedResponseObj = response.json();
    return Promise.resolve(parsedResponseObj);
  }

  private handleError(error: Response): Promise<any> {
    return Promise.reject(error);
  }

}


