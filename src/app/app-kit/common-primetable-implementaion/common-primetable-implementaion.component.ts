import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pb-common-primetable-implementaion',
  templateUrl: './common-primetable-implementaion.component.html',
  styleUrls: ['./common-primetable-implementaion.component.scss']
})
export class CommonPrimetableImplementaionComponent implements OnInit {

  cars;
  cols;
  constructor() { }


  ngOnInit() {
    this.cars = [
      {vin: 1, year: 2019, brand: 'toyota', color: 'red'},
      {vin: 23, year: 2020, brand: 'honda', color: 'blue'},
      {vin: 123, year: 2019, brand: 'toyota', color: 'red'},
      {vin: 234, year: 2019, brand: 'toyota', color: 'red'},
      {vin: 134, year: 2019, brand: 'toyota', color: 'red'},
      {vin: 124, year: 2019, brand: 'toyota', color: 'red'},
      {vin: 123, year: 2019, brand: 'toyota', color: 'red'},
      {vin: 34, year: 2019, brand: 'toyota', color: 'red'},
      {vin: 34, year: 2019, brand: 'toyota', color: 'red'},
      {vin: 10, year: 2019, brand: 'toyota', color: 'red'},
      {vin: 11, year: 2019, brand: 'toyota', color: 'red'},
      {vin: 12, year: 2019, brand: 'toyota', color: 'red'},
      {vin: 13, year: 2019, brand: 'toyota', color: 'red'},
      {vin: 14, year: 2019, brand: 'toyota', color: 'red'},
      {vin: 15, year: 2019, brand: 'toyota', color: 'red'},
      {vin: 16, year: 2019, brand: 'toyota', color: 'red'},
      {vin: 17, year: 2019, brand: 'toyota', color: 'red'},
      {vin: 18, year: 2019, brand: 'toyota', color: 'red'},

      ];

    this.cols = [
      {field: 'vin', header: 'Vin'},
      {field: 'year', header: 'Year'},
      {field: 'brand', header: 'Brand'},
      {field: 'color', header: 'Color'}
    ];

  }

}
