import {Component, OnInit} from '@angular/core';
import {UtilService} from "../../../provider/util.service";
import {CommonService} from "../../../provider/common.service";

@Component({
  selector: 'pb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countryData: any = "";
  browserData: any = "";

  constructor(private utilService: UtilService,
              private commonService: CommonService) {
  }

  ngOnInit() {
    let me = this;
    me.utilService.getLocationAndBrowser().then(clientData => {
      me.commonService.setClientDetails(clientData).subscribe(response => {
        me.countryData = response["countryData"];
        me.browserData = response["browserData"];
      })

    });
  }

}


