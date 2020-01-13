import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AdminService} from "../../provider/Admin/admin.service";
import {SessionService} from "../../provider/session/session.service";
import {AlertSnackbarComponent} from "../../alert-snackbar/alert-snackbar.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ToastrService} from "ngx-toastr";
import {AlertToasterService} from "../../provider/alert-toster/alert-toster.service";

@Component({
  selector: 'pb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginType: "Login";
  isLoginSuccess: boolean;

  loginForm = new FormGroup({
    'username': new FormControl('', []),
    'password': new FormControl('', [])
  });

  durationInSeconds = 5;


  constructor(private router: Router,
              private activatedRouter: ActivatedRoute,
              private adminService: AdminService,
              private sessionService: SessionService,
              private snackbar: MatSnackBar,
              private alertToaster: AlertToasterService
              // private toasterSer:ToastrService
  ) {

    this.isLoginSuccess = true;
  }

  ngOnInit() {

  }

  openSnackBar() {
    this.snackbar.openFromComponent(AlertSnackbarComponent, {
      duration: this.durationInSeconds * 1000,
    })
  }

  // showSuccess() {
  //   this.toasterSer.success('You are awesome!', 'Success!');
  // }

  submitlog() {
    // this.openSnackBar();



this.adminService.googleSheetLogin(this.loginForm.value).subscribe(response=>{
  console.log(response);
});


    // this.adminService.login(this.loginForm.value).subscribe(response => {
    //   console.log(response);
    //   debugger;
    //   if (response) {
    //     this.alertToaster.showSuccessToast("Successfully Logeed In", "Congratulation");
    //     this.router.navigate(['/admin']);
    //     //  sessionStorage.setItem("admin", JSON.stringify(response['entity']));
    //     this.sessionService.setLoggedIn(true);
    //   } else {
    //     this.alertToaster.showErrorToast("Invalid Login Credentials, Please try again.", "Alert");
    //     this.isLoginSuccess = false;
    //     this.sessionService.setLoggedIn(false);
    //
    //     setTimeout(() => {
    //       this.isLoginSuccess = true;
    //     }, 2000);
    //   }
    // });
    // console.log(this.loginForm.value);


  }
  //
  //  authenticate() {
  //   return gapi.auth2.getAuthInstance()
  //     .signIn({scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets"})
  //     .then(function() { console.log("Sign-in successful"); },
  //       function(err) { console.error("Error signing in", err); });
  // }
  // function loadClient() {
  //   gapi.client.setApiKey("YOUR_API_KEY");
  //   return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/sheets/v4/rest")
  //     .then(function() { console.log("GAPI client loaded for API"); },
  //       function(err) { console.error("Error loading GAPI client for API", err); });
  // }
  // // Make sure the client is loaded and sign-in is complete before calling this method.
  // function execute() {
  //   return gapi.client.sheets.spreadsheets.values.append({
  //     "spreadsheetId": "1z_zzqFMwmUfFr2D99Z1IgHIL1Doa03t5oUwUjW5EP0I",
  //     "range": "A1",
  //     "includeValuesInResponse": false,
  //     "insertDataOption": "INSERT_ROWS",
  //     "responseDateTimeRenderOption": "SERIAL_NUMBER",
  //     "responseValueRenderOption": "FORMATTED_VALUE",
  //     "valueInputOption": "USER_ENTERED",
  //     "resource": {
  //       "majorDimension": "ROWS",
  //       "values": [
  //         [
  //           "narayan",
  //           "acharya",
  //           "nanacharya123@gmail.com"
  //         ]
  //       ]
  //     }
  //   })
  //     .then(function(response) {
  //         // Handle the results here (response.result has the parsed body).
  //         console.log("Response", response);
  //       },
  //       function(err) { console.error("Execute error", err); });
  // }
  // gapi.load("client:auth2", function() {
  //   gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
  // });
  //

}
