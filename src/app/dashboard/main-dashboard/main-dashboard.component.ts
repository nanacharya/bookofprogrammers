import {Component, OnInit} from '@angular/core';
import {DocumentOrientedDatabase, RelationalDatabase} from "../../model/enums/Languages.enum";

@Component({
  selector: 'pb-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  relationalDataBaseItem: any[] = [];
  objOrientedDataBaseItem: any[] = [];

  constructor() {
    for (let item in RelationalDatabase) {
      if (isNaN(Number(item))) {
        this.relationalDataBaseItem.push(item)
      }
    }


    for (let item in DocumentOrientedDatabase) {
      if (isNaN(Number(item))) {
        this.objOrientedDataBaseItem.push(item)
      }
    }
  }

  ngOnInit() {
  }


}
