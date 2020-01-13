import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }

  baseUrl = environment.baseURL;

  //TODO  need to centralize error
  post(url, data) {

    return this.httpClient.post(this.baseUrl + url, data);
  }

  get(url) {
    return this.httpClient.get(this.baseUrl + url);
  }

  handleError(exception: HttpErrorResponse) {
    // const errors: [] = [];
    debugger;
    console.log(exception);
    // exception.error.forEach()
  }

}
