import {Component, OnInit} from '@angular/core';
import {LinkModel} from "../../model/Link.model";
import {DataService} from "../../provider/data/data.service";
import {ActivatedRoute} from "@angular/router";
import {CommonService} from "../../provider/common.service";
import {GlobalVariable} from "../../Global/GlobalVariable";

@Component({
  selector: 'pb-entertainmnet',
  templateUrl: './entertainmnet.component.html',
  styleUrls: ['./entertainmnet.component.scss']
})
export class EntertainmnetComponent implements OnInit {
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

    this.linkModule.side = "entertainment";
    this.linkModule.isapproved = false;

  }

  ngOnInit() {

    this.activeRouterLink.params.subscribe(response => {
      this.clearAllData();
      let type = response.type;
      switch (type) {
        case "game":
          this.description = this.gloableVar.gameDesc;
          this.title = "Best Game For Programmer.";

          break;

        case "challenges":
          this.description = this.gloableVar.challenges;
          this.title = "Best Coding Challenges For Programmer.";
          break;

        case "movies":
          this.description = this.gloableVar.movies;
          this.title = "Best Movies For Programmer";
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
