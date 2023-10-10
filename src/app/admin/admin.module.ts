import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {BackendComponent} from './backend/backend.component';
import {FrontendComponent} from './frontend/frontend.component';
import {DatabaseComponent} from './database/database.component';
import {RouterModule, Routes} from "@angular/router";

import {AdminComponent} from "./admin.component";
import {AddOrUpdateComponent} from "./add-or-update/add-or-update.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AgGridModule} from "ag-grid-angular";
import {HomeComponent} from "../dashboard/dashboard-component/home/home.component";
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {OthersComponent} from './others/others.component';
import {AuthGuardGuard} from "../authGuard/auth-guard.guard";
import {AlertSnackbarComponent} from "../alert-snackbar/alert-snackbar.component";

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, canActivate: [AuthGuardGuard],
    children: [
      {path: '', component: AdminHomeComponent},
      {path: 'home', component: AdminHomeComponent},
      {path: 'addorupdate', component: AddOrUpdateComponent},
      {path: 'frontend', component: FrontendComponent},
      {path: 'backend', component: BackendComponent},
      {path: 'database', component: DatabaseComponent},
      {path: 'others', component: OthersComponent},

    ]
  },


];

@NgModule({
  declarations: [LoginComponent, BackendComponent, FrontendComponent, DatabaseComponent, AddOrUpdateComponent, AdminHomeComponent,
    OthersComponent,AlertSnackbarComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AgGridModule,
    ReactiveFormsModule,


  ],
  // entryComponents: [AlertSnackbarComponent],

})
export class AdminModule {

}
