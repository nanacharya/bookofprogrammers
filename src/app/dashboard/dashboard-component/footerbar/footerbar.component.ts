import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommonService} from "../../../provider/common.service";

@Component({
  selector: 'pb-footerbar',
  templateUrl: './footerbar.component.html',
  styleUrls: ['./footerbar.component.scss']
})
export class FooterbarComponent implements OnInit {


  showform: boolean;

  form = new FormGroup({
    'name': new FormControl("", []),
    'email': new FormControl("", [Validators.required, Validators.email]),
    'subject': new FormControl("", []),
    'message': new FormControl("", []),


  });

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    this.showform = false;
  }

  get email() {
    return this.form.get("email");
  }

  submitForm() {
    console.log(this.form.value);
    this.commonService.sendComment(this.form.value).subscribe(response => {
      console.log(response);
    });
    this.showForm(false);
  }

  showForm(value) {
    this.showform = value;
  }

}
