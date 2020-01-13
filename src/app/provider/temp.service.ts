import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TempService {

  tempData: any = "";

  constructor() {
  }

  setTempData(any: any) {
    this.tempData = any;
  }


  getTempData() {
    return this.tempData;
  }
}
