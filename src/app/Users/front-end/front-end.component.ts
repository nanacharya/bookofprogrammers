import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../provider/data/data.service";
import htmlVersion from "../../../assets/json/htmlversion.json";
import cssVersion from "../../../assets/json/cssVersion.json";
import javascript from "../../../assets/json/javascriptVersion.json";
import angular from "../../../assets/json/angularVersion.json";
import extjs from "../../../assets/json/extjs.json";
import {ActivatedRoute} from "@angular/router";
import {GlobalVariable} from "../../Global/GlobalVariable";
import {LinkModel} from "../../model/Link.model";
import {CommonService} from "../../provider/common.service";

@Component({
  selector: 'pb-front-end',
  templateUrl: './front-end.component.html',
  styleUrls: ['./front-end.component.scss']
})
export class FrontEndComponent implements OnInit {

  /*Reading local Json file
    * Inside tsconfig.js add
      "resolveJsonModule": true,
      "esModuleInterop": true,
      * */
  linkModule: LinkModel = new LinkModel();
  private gridApi: any;
  private gridColumnApi: any;
  defaultColDef: any;
  colResizeDefault: any;


  private featuregridApi: any;
  private featuregridColumnApi: any;
  featuredefaultColDef: any;
  featurecolResizeDefault: any;

  cols = [
    {field: 'feature', header: 'Feature'},
    {field: 'websitename', header: 'Websitename'},
    {field: 'link', header: 'Link'},
  ];

  columnDefs = [
    {headerName: 'Feature', field: 'feature', sortable: true, filter: true, },
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

  columnDefsForVersion = [
    {headerName: 'Year', field: 'year', sortable: true, filter: true},
    {headerName: 'Version', field: 'version', sortable: true, filter: true},
    {headerName: 'Desc', field: 'desc', sortable: true, filter: true, width: 500},
  ];
  rowDataForVersion: any[] = [];

  title: any = "";
  description: any = "";
  cars: any;

  constructor(private dataService: DataService,
              private commonService: CommonService,
              private activeRouterLink: ActivatedRoute,
              private gloableVar: GlobalVariable) {

    this.linkModule.side = "frontend";
    this.linkModule.isapproved = false;
    //  this.rowDataForVersion = htmlVersion

  }

  ngOnInit() {

//https://stackoverflow.com/questions/49738911/angular-5-routing-to-same-component-but-different-param-not-working

    this.activeRouterLink.params.subscribe(response => {
      this.clearAllData();
      let type = response.type;
      switch (type) {
        case "html":
          this.rowDataForVersion = htmlVersion;
          this.description = this.gloableVar.htmlDesc;
          this.title = "HTML";


          break;

        case "css":
          this.rowDataForVersion = cssVersion;
          this.description = this.gloableVar.cssDesc;
          this.title = "CSS";
          break;

        case "javascript":
          this.rowDataForVersion = javascript;
          this.description = this.gloableVar.javascriptDesc;
          this.title = "JAVASCRIPT";
          break;


        case "angular":
          this.rowDataForVersion = angular;
          this.description = this.gloableVar.angularDesc;
          this.title = "ANGULAR";
          break;

        case "extjs":
          this.rowDataForVersion = extjs;
          this.description = this.gloableVar.extjsDesc;
          this.title = "EXTJS";
          break;

      }
      this.linkModule.type = type;
      this.getRowData(type);

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
    this.rowDataForVersion = [];
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
    // params.api.sizeColumnsToFit();
    //  this.defaultColDef = { resizable: true };
    //  this.colResizeDefault = "shift";

    var allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach(function (column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds);

  }

  onGridReadyfeature(featureParmas: any) {
    this.featuregridApi = featureParmas.api;
    this.featuregridColumnApi = featureParmas.columnApi;
    var allColumnIds = [];
    this.featuregridColumnApi.getAllColumns().forEach(function (column) {
      allColumnIds.push(column.colId);
    });
    this.featuregridColumnApi.autoSizeColumns(allColumnIds);
  }
}
