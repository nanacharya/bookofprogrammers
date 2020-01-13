import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClientInfo} from "../model/client-info.model";

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  private info: ClientInfo = new ClientInfo();

  constructor(private httpClient: HttpClient) {


  }

  getGeoLocation() {
    /*  fetch("https://ipapi.co/json/", {
        method: 'get'
      }).then(function(response) {

      }).catch(function(err) {
        // Error :(
      });
  */
    return new Promise(resolve => {
      this.httpClient.get("https://ipapi.co/json/").subscribe(response => {
        this.info.ip = response["ip"];
        this.info.country = response["country"];
        this.info.lon = response["longitude"];
        this.info.lat = response["latitude"];
        this.info.address = response["city"] + " " + response["region"]
          + " " + response["region_code"];
        console.log("getGeoLocation is done.");
        resolve("");


      })
    })
  }

  getBrowser() {

    return new Promise(resolve => {
      var sBrowser, sUsrAg = navigator.userAgent;
      if (sUsrAg.indexOf("Firefox") > -1) {
        sBrowser = "Mozilla Firefox";
        // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
      } else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
        sBrowser = "Opera";
        //"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
      } else if (sUsrAg.indexOf("Trident") > -1) {
        sBrowser = "Microsoft Internet Explorer";
        // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
      } else if (sUsrAg.indexOf("Edge") > -1) {
        sBrowser = "Microsoft Edge";
        // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
      } else if (sUsrAg.indexOf("Chrome") > -1) {
        sBrowser = "Google Chrome";
        // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
      } else if (sUsrAg.indexOf("Safari") > -1) {
        sBrowser = "Safari";
        // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
      } else {
        sBrowser = "unknown";
      }
      console.log("Browser is done.");
      resolve("");

      this.info.browser = sBrowser;
    })

  }

  async getLocationAndBrowser() {
    const a = await this.getGeoLocation();
    const b = await this.getBrowser();

    //console.log("returning final getLocationAndBrowser is done.");
   return this.info;

  }
}
