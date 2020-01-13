import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pb-common-primetable-admin',
  templateUrl: './common-primetable-admin.component.html',
  styleUrls: ['./common-primetable-admin.component.scss']
})
export class CommonPrimetableAdminComponent implements OnInit {

  @Input() cols;
  @Input() tableData;
  @Input() datakey;
  selectedData;
  constructor() { }

  ngOnInit() {
  }

}
