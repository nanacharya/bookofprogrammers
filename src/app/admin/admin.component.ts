import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'pb-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  adminMenu: any = "";

  constructor() {
  }

  ngOnInit() {
    this.adminMenu = [
      {
        id: 1,
        menuText: 'Home',
        collapseId: 'homeCollapse',
        route: 'home',
        iconCls: 'mdi mdi-home',
        childMenu: []
      },

      {
        id: 1,
        menuText: 'Front End',
        collapseId: 'homeCollapse',
        route: 'frontend',
        iconCls: 'mdi mdi-home',
        childMenu: []
      },


      {
        id: 1,
        menuText: 'Back End',
        collapseId: 'homeCollapse',
        route: 'backend',
        iconCls: 'mdi mdi-home',
        childMenu: []
      },

      {
        id: 1,
        menuText: 'Database',
        collapseId: 'homeCollapse',
        route: './database',
        iconCls: 'mdi mdi-home',
        childMenu: []
      },

      {
        id: 1,
        menuText: 'Others',
        collapseId: 'homeCollapse',
        route: './others',
        iconCls: 'mdi mdi-home',
        childMenu: []
      },


      {
        id: 1,
        menuText: 'Add New',
        collapseId: 'homeCollapse',
        route: './addorupdate',
        iconCls: 'mdi mdi-home',
        childMenu: []
      },
      // {
      //   id: 2,
      //   menuText: 'FrontEnd',
      //   collapseId: 'customersCollapse',
      //   iconCls: 'mdi mdi-home',
      //   route: '',
      //   childMenu: [
      //     {
      //       menuText: 'All Customers',
      //       route: './allcustomer'
      //     },
      //     {
      //       menuText: 'Create Customers',
      //       route: './createcustomer'
      //     },
      //
      //   ]
      // },
    ];
  }


}
