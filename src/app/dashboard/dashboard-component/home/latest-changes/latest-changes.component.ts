import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../../provider/data/data.service";
import {CommonService} from "../../../../provider/common.service";
import {ActivatedRoute} from "@angular/router";
import {GlobalVariable} from "../../../../Global/GlobalVariable";

@Component({
  selector: 'pb-latest-changes',
  templateUrl: './latest-changes.component.html',
  styleUrls: ['./latest-changes.component.scss']
})
export class LatestChangesComponent implements OnInit {

  private gridApi: any;
  private gridColumnApi: any;
  defaultColDef: any;
  colResizeDefault: any;

  columnDefs = [
    {headerName: 'Feature', field: 'feature', sortable: true, filter: true},
    {headerName: 'Websitename', field: 'websitename', sortable: true, filter: true,},
    {
      headerName: 'Link', field: 'link', sortable: true, filter: true, width: 500,
      cellRenderer: function (params) {
        if (params.value) {
          return '<a  href="' + params.value + '" target="_blank">' + params.value + '</a>';
        } else {
          return '';
        }
      },
    },
  ];

  rowData: any [] = [];

  constructor(private dataService: DataService) {


  }

  ngOnInit() {
    this.getRowData()
  }


  getRowData() {
    this.dataService.getLatestRecords().subscribe(response => {
      // @ts-ignore
      this.rowData = response;
    });
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    var allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach(function (column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds);

  }
}
