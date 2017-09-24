import {RequestOptions, Headers} from "@angular/http";
export class Commons {
  public static getRequestOptions(): RequestOptions {
    const reqHeaders = new Headers();
    reqHeaders.set('Content-Type', 'application/json');

    const requestOptions = new RequestOptions({
      headers: reqHeaders
    });
    return requestOptions;
  }
}
