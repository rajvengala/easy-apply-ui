import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Commons} from "../utils/commons.class";
import {endpoints} from "../properties/endpoints";

@Injectable()
export class GetDetailsService {

  private requestOptions: RequestOptions;

  constructor(private http: Http) {
    this.requestOptions = Commons.getRequestOptions();
  }

  getAllCities(): Promise<any> {
    return this.http.get(endpoints.getCitiesUrl, this.requestOptions)
      .toPromise()
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  getAllLocalities(cityName: string): Promise<any> {
    return this.http.get(endpoints.getlocalitiesUrl(cityName), this.requestOptions)
      .toPromise()
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  getAllSchools(cityName: string, locality: string): Promise<any> {
    return this.http.get(endpoints.getSchoolsUrl(cityName, locality), this.requestOptions)
      .toPromise()
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  private handleResponse(response: Response): Promise<any> {
    const parsedResponseObj = response.json();
    return Promise.resolve(parsedResponseObj);
  }

  private handleError(error: Response): Promise<any> {
    return Promise.reject(error);
  }

}


