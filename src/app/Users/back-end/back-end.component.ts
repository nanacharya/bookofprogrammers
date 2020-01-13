import {Component, OnInit} from '@angular/core';
import {DataService} from "../../provider/data/data.service";
import {ActivatedRoute} from "@angular/router";
import {GlobalVariable} from "../../Global/GlobalVariable";

import java from "../../../assets/json/java.json";
import php from "../../../assets/json/php.json";
import python from "../../../assets/json/python.json";
import ruby from "../../../assets/json/ruby.json";
import {RelationalDatabase} from "../../model/enums/Languages.enum";
import {LinkModel} from "../../model/Link.model";
import {CommonService} from "../../provider/common.service";


@Component({
  selector: 'pb-back-end',
  templateUrl: './back-end.component.html',
  styleUrls: ['./back-end.component.scss']
})
export class BackEndComponent implements OnInit {

  linkModule: LinkModel = new LinkModel();

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

  columnDefsForVersion = [
    {headerName: 'Year', field: 'year', sortable: true, filter: true},
    {headerName: 'Version', field: 'version', sortable: true, filter: true},
    {headerName: 'Desc', field: 'desc', sortable: true, filter: true},
  ];
  rowDataForVersion: any[] = [];

  title: any = "";
  description: any = "";
  private gridApi: any;
  private gridColumnApi: any;
  defaultColDef: any;
  colResizeDefault: any;


  private featuregridApi: any;
  private featuregridColumnApi: any;
  featuredefaultColDef: any;
  featurecolResizeDefault: any;

  constructor(private dataService: DataService,
              private activeRouterLink: ActivatedRoute,
              private commonService: CommonService,
              private gloableVar: GlobalVariable) {

    this.linkModule.side = "backend";
    this.linkModule.isapproved = false;

    //Object.keys(RelationalDatabase).filter(key => !isNaN(Number(MotifIntervention[key])));

  }

  ngOnInit() {

    this.activeRouterLink.params.subscribe(response => {
      this.clearAllData();
      let type = response.type;
      switch (type) {
        case "java":
          this.rowDataForVersion = java;
          this.description = this.gloableVar.javaDesc;
          this.title = "JAVA";

          break;

        case "php":
          this.rowDataForVersion = php;
          this.description = this.gloableVar.phpDesc;
          this.title = "PHP";
          break;

        case "python":
          this.rowDataForVersion = python;
          this.description = this.gloableVar.pythonDesc;
          this.title = "PYTHON";
          break;


        case "ruby":
          this.rowDataForVersion = ruby;
          this.description = this.gloableVar.rubyDesc;
          this.title = "RUBY";
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
