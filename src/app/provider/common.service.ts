import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClientInfo} from "../model/client-info.model";
import {WebsiteComment} from "../model/WebsiteComment.model";
import {LinkModel} from "../model/Link.model";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private  httpClient: HttpClient, private apiService: ApiService) {

  }

  setClientDetails(clientData: ClientInfo) {
    return this.apiService.post("setClientDetails", clientData);
  }

  sendComment(value: any) {
    return this.apiService.post("submitComment", value);

  }

  sendWebsiteComment(websiteComment: WebsiteComment) {
    return this.apiService.post("submitWebsiteComment", websiteComment);
  }

  addFeatureLink(linkModule: LinkModel) {
    return this.apiService.post("addFeatureLink", linkModule);

  }

  updateFeatureLink(linkModule: LinkModel) {
    return this.apiService.post("updateFeatureLink", linkModule);
  }

  deleteFeatureLink(selectedData: LinkModel) {
    return this.apiService.get("deleteFeatureLink/" + selectedData.link_id);
  }
}
