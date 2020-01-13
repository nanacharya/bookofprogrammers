import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pb-common-primetable',
  templateUrl: './common-primetable.component.html',
  styleUrls: ['./common-primetable.component.scss']
})
export class CommonPrimetableComponent implements OnInit {

  @Input() cols;
  @Input() tableData;
  @Input() datakey;
  constructor() { }

  ngOnInit() {
  }

}
