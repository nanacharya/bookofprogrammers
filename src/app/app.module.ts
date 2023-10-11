import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainDashboardComponent} from './dashboard/main-dashboard/main-dashboard.component';
import {FooterbarComponent} from './dashboard/dashboard-component/footerbar/footerbar.component';
import {ViewcountComponent} from './dashboard/dashboard-component/home/viewcount/viewcount.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button"
import {MatCardModule} from "@angular/material/card"
import {MatExpansionModule} from "@angular/material/expansion"
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatGridListModule} from "@angular/material/grid-list"
import {MatIconModule} from "@angular/material/icon"
import {MatListModule} from "@angular/material/list"
import {MatMenuModule} from "@angular/material/menu"
import {MatSidenavModule} from "@angular/material/sidenav"
import {MatSnackBar} from "@angular/material/snack-bar"
import {MatToolbarModule} from "@angular/material/toolbar";

import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from './dashboard/dashboard-component/home/home.component';
import {FrontEndComponent} from './Users/front-end/front-end.component';
import {BackEndComponent} from './Users/back-end/back-end.component';
// import {ChartsModule} from "ng2-charts";
import {ViewCountByCountryComponent} from './dashboard/dashboard-component/home/view-count-by-country/view-count-by-country.component';
import {UtilService} from "./provider/util.service";
import {CommonService} from "./provider/common.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MindCheckComponent} from './dashboard/dashboard-component/home/mind-check/mind-check.component';
import {AdminComponent} from './admin/admin.component';
import {AdminModule} from "./admin/admin.module";
import {AgGridModule} from "ag-grid-angular";
import {LoginComponent} from "./admin/login/login.component";
import {GlobalVariable} from "./Global/GlobalVariable";
import {DatabaseComponent} from "./Users/database/database.component";
import {EntertainmnetComponent} from './Users/entertainmnet/entertainmnet.component';
import {ToastrModule} from "ngx-toastr";
import {AlertTosterComponent} from './alert-toster/alert-toster.component';
import {LatestChangesComponent} from './dashboard/dashboard-component/home/latest-changes/latest-changes.component';
import {ContactInfoComponent} from './dashboard/contact-info/contact-info.component';
// #import {AgmCoreModule} from "@agm/core";
import { CareersComponent } from './Users/careers/careers.component';
import { CommonPrimetableComponent } from './app-kit/common-primetable/common-primetable.component';
import { CommonPrimetableImplementaionComponent } from './app-kit/common-primetable-implementaion/common-primetable-implementaion.component';
import {TableModule} from "primeng/table";
import { CommonPrimetableAdminComponent } from './app-kit/common-primetable-admin/common-primetable-admin.component';


const routs: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactInfoComponent},
  {path: 'frontend/:type', component: FrontEndComponent},
  {path: 'backend/:type', component: BackEndComponent},
  {path: 'database/:type', component: DatabaseComponent},
  {path: 'entertainmnet/:type', component: EntertainmnetComponent},
  {path: 'career/:type', component: CareersComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    MainDashboardComponent,
    FooterbarComponent,
    ViewcountComponent,
    HomeComponent,
    FrontEndComponent,
    BackEndComponent,
    ViewCountByCountryComponent,
    MindCheckComponent,
    AdminComponent,
    DatabaseComponent,
    EntertainmnetComponent,
    AlertTosterComponent,
    LatestChangesComponent,
    ContactInfoComponent,
    CareersComponent,
    CommonPrimetableComponent,
    CommonPrimetableImplementaionComponent,
    CommonPrimetableAdminComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    RouterModule.forRoot(routs),
    MatCardModule,
    HttpClientModule,
    // ChartsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    AdminModule,
    // AgGridModule.withComponents([]),
    MatGridListModule,
    MatExpansionModule,
    ToastrModule.forRoot(),
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyC5MwxNX-MUEU3vHDcd8BK5KfjV4eZSv2I'
    // }),
    TableModule,

  ],
  providers: [UtilService, CommonService, GlobalVariable, MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule {
}
