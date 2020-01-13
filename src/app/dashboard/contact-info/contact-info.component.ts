import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pb-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

  title: string = 'FIND US';
  lat: number;
  lng: number;

  constructor() { }

  ngOnInit() {

    if (navigator.geolocation) {

      this.lat = 51.678418;
      this.lng = 7.809007;
      //  let cord = navigator.geolocation.watchPosition(this.showPosition);
      //  this.lat = cord.split("-")[0];
    } else {
      this.lat = 51.678418;
      this.lng = 7.809007;
    }
  }

  showPosition(position) {
    debugger;
    console.log(position);
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;

    // return lat + "-" + lng;
  }

}
