import {Component, OnInit} from '@angular/core';
import {LinkModel} from "../../model/Link.model";
import {DataService} from "../../provider/data/data.service";
import {ActivatedRoute} from "@angular/router";
import {CommonService} from "../../provider/common.service";
import {GlobalVariable} from "../../Global/GlobalVariable";

@Component({
  selector: 'pb-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {

  linkModule: LinkModel = new LinkModel();

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

  title: any = "";
  description: any = "";

  constructor(private dataService: DataService,
              private activeRouterLink: ActivatedRoute,
              private commonService: CommonService,
              private gloableVar: GlobalVariable) {

    this.linkModule.side = "career";
    this.linkModule.isapproved = false;

  }

  ngOnInit() {
    debugger;

    this.activeRouterLink.params.subscribe(response => {
      this.clearAllData();
      let type = response.type;
      switch (type) {
        case "joblisting":
          this.description = this.gloableVar.joblisting;
          this.title = "Job Listing Sites ";

          break;

        case "interview":
          this.description = this.gloableVar.interview;
          this.title = "Interview Preparation Sites";
          break;


      }
      this.getRowData(type);
      this.linkModule.type = type;

    });


  }

  getRowData(type) {
    this.dataService.getLinkFeature(type).subscribe(response => {
      // @ts-ignore
      this.rowData = response;
    });
  }


  private clearAllData() {
    this.rowData = [];
    this.title = "";
    this.description = "";
  }

  clearForm() {
    this.linkModule.websitename = "";
    this.linkModule.link = "";
    this.linkModule.feature = "";

  }

  submitForm() {
    this.rowData.unshift(this.linkModule);
    this.commonService.addFeatureLink(this.linkModule).subscribe(res => {
      this.clearForm();
      console.log(res);
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
