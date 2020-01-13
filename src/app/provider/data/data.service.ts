import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../api.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient, private apiService:ApiService) {
  }

  getHtmlFeatures() {
    return this.apiService.get("data/getHtmlFeatures");
  }

  getLinkFeature(type: any) {
    return this.apiService.get("data/getLinkFeatures/"+type);
  }

  getLatestRecords() {
    return this.apiService.get("data/getLatestRecords");
  }
}
