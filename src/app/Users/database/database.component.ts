import {Component, OnInit} from '@angular/core';
import {DataService} from "../../provider/data/data.service";
import {ActivatedRoute} from "@angular/router";
import {GlobalVariable} from "../../Global/GlobalVariable";

import db2 from "../../../assets/json/database/db2.json";
import mysql from "../../../assets/json/database/mysql.json";
import oracle from "../../../assets/json/database/oracle.json";
import postgresql from "../../../assets/json/database/postgresql.json";
import sqlite from "../../../assets/json/database/sqlite.json";
import sqlserver from "../../../assets/json/database/sqlserver.json";
import sybase from "../../../assets/json/database/sybase.json";
import mongodb from "../../../assets/json/database/mongodb.json";
import couchdb from "../../../assets/json/database/couchdb.json";
import cassandra from "../../../assets/json/database/cassandra.json";
import {CommonService} from "../../provider/common.service";
import {LinkModel} from "../../model/Link.model";


@Component({
  selector: 'pb-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {

  linkModule: LinkModel = new LinkModel();
  private gridApi: any;
  private gridColumnApi: any;
  defaultColDef: any;
  colResizeDefault: any;


  private featuregridApi: any;
  private featuregridColumnApi: any;
  featuredefaultColDef: any;
  featurecolResizeDefault: any;

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
    {headerName: 'Desc', field: 'desc', sortable: true, filter: true, width: 500},
  ];
  rowDataForVersion: any[] = [];

  title: any = "";
  description: any = "";

  constructor(private dataService: DataService,
              private activeRouterLink: ActivatedRoute,
              private commonService: CommonService,
              private gloableVar: GlobalVariable) {

    this.linkModule.side = "frontend";
    this.linkModule.isapproved = false;

  }

  ngOnInit() {

    this.activeRouterLink.params.subscribe(response => {
      this.clearAllData();
      let type = response.type;
      debugger;
      switch (type) {
        case "db2":
          this.rowDataForVersion = db2;
          this.description = this.gloableVar.db2Desc;
          this.title = "DB2";

          break;

        case "mysql":
          this.rowDataForVersion = mysql;
          this.description = this.gloableVar.mysqlDesc;
          this.title = "MYSQL";
          break;

        case "oracle":
          this.rowDataForVersion = oracle;
          this.description = this.gloableVar.oracleDesc;
          this.title = "ORACLE";
          break;


        case "postgresql":
          this.rowDataForVersion = postgresql;
          this.description = this.gloableVar.postgresql;
          this.title = "POSTGRESQL";
          break;

        case "sqlite":
          this.rowDataForVersion = sqlite;
          this.description = this.gloableVar.sqlite;
          this.title = "SQLITE";
          break;

        case "sqlserver":
          this.rowDataForVersion = sqlserver;
          this.description = this.gloableVar.sqlserver;
          this.title = "SQLSERVER";
          break;

        case "sybase":
          this.rowDataForVersion = sybase;
          this.description = this.gloableVar.sybase;
          this.title = "SYBASE";
          break;

        case "mongodb":
          this.rowDataForVersion = mongodb;
          this.description = this.gloableVar.mongodb;
          this.title = "MONGODB";
          break;

        case "couchdb":
          this.rowDataForVersion = couchdb;
          this.description = this.gloableVar.couchdb;
          this.title = "COUCHDB";
          break;

        case "cassandra":
          this.rowDataForVersion = cassandra;
          this.description = this.gloableVar.cassandra;
          this.title = "CASSANDRA";
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
