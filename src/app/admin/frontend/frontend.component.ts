import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminService} from "../../provider/Admin/admin.service";
// @ts-ignore
import {AgGridNg2} from 'ag-grid-angular';
import {TempService} from "../../provider/temp.service";
import {Router} from "@angular/router";
import {CommonService} from "../../provider/common.service";
import {LinkModel} from "../../model/Link.model";


@Component({
  selector: 'pb-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss']
})
export class FrontendComponent implements OnInit {


  // @ts-ignore
  @ViewChild("agGrid") agGrid: AgGridNg2;

  private gridApi: any;
  private gridColumnApi: any;
  defaultColDef: any;
  colResizeDefault: any;

  columnDefs = [
    {headerName: 'Id', field: 'link_id', width: 80, sortable: true, filter: true, checkboxSelection: true},
    {headerName: 'Feature', field: 'feature', sortable: true, filter: true},
    {headerName: 'Link', field: 'link', sortable: true, filter: true},
    {headerName: 'Side', field: 'side', width: 80, sortable: true, filter: true},
    {headerName: 'websitename', field: 'websitename', sortable: true, filter: true},
    {
      headerName: 'IsApproved', field: 'isapproved', sortable: true, filter: true, width: 120,
      cellStyle: function (params) {
        if (params.value === true) {
          return {'color': 'white', 'background-color': 'green'}
        } else {
          return {'color': 'white', 'background-color': 'red'};
        }

      }
    },
    {headerName: 'SubmittedAt', field: 'submittedAt', sortable: true, filter: true},
    {headerName: 'type', field: 'type', width: 80, sortable: true, filter: true},

  ];

  rowData: any [] = [];

  constructor(private adminService: AdminService,
              private tempServic: TempService,
              private router: Router,
              private commonServices:CommonService) {
  }

  ngOnInit() {
    this.adminService.getAllData().subscribe(response => {
      // @ts-ignore
      this.rowData = response;
    });
  }

  updateRecord() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    this.tempServic.setTempData(selectedData[0]);
    this.router.navigate(["admin/addorupdate"]);
    console.log(selectedData);
  }

  deleteRecord() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData:LinkModel = selectedNodes.map(node => node.data);
    this.rowData.splice(selectedData[0]);
    this.commonServices.deleteFeatureLink(selectedData[0]).subscribe(res => {
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
