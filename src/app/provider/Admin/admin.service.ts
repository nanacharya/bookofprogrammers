import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiService} from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  httpOptions: any;

  constructor(private httpClient: HttpClient, private apiService: ApiService) {

    this.httpOptions = {
      headers: new HttpHeaders({
        // Authorization : 'Bearer [YOUR_ACCESS_TOKEN]' ,
        Authorization : '622542928491-bj6ujhfhp24jhtj570eqvopn17vrlmon.apps.googleusercontent.com' ,
        Accept: 'application/json' ,
        'Content-Type' : 'application/json',
      })
    };

  }


  getAllData() {
    return this.apiService.get('admin/getAllData');
  }

  login(value: any) {
    return this.apiService.post('admin/adminLogin' , value);

  }
  googleSheetLogin(value: any) {
  return   this.httpClient.post( 'https://sheets.googleapis.com/v4/spreadsheets/1z_zzqFMwmUfFr2D99Z1IgHIL1Doa03t5oUwUjW5EP0I/values/A1:append?insertDataOption=INSERT_ROWS&responseDateTimeRenderOption=SERIAL_NUMBER&responseValueRenderOption=FORMATTED_VALUE&valueInputOption=USER_ENTERED&key=622542928491-bj6ujhfhp24jhtj570eqvopn17vrlmon.apps.googleusercontent.com',
      '{"majorDimension":"ROWS","values":[["sirjana","acharya","sirjana@gmail.com"]]}',
      this.httpOptions
    );
  }

  setLoggedIn(b: boolean) {

  }
}
