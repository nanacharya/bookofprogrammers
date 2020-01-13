import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LinkModel} from "../../model/Link.model";
import {CommonService} from "../../provider/common.service";
import {TempService} from "../../provider/temp.service";

@Component({
  selector: 'pb-add-or-update',
  templateUrl: './add-or-update.component.html',
  styleUrls: ['./add-or-update.component.scss']
})
export class AddOrUpdateComponent implements OnInit {


  linkModule: LinkModel = new LinkModel();
  title: string = "Add New Feature Link";
  submitBtn: string = "Submit";

  constructor(private  commonServices: CommonService, private tempService: TempService) {
  }

  ngOnInit() {
    let updateData = this.tempService.getTempData();
    if (updateData) {
      this.linkModule = updateData;
      this.tempService.setTempData("");
      this.title = "Update Feature Link";
      this.submitBtn = "Update"
    }
  }

  submitForm() {
    console.log(this.linkModule);
    if (this.submitBtn === "Update") {
      this.commonServices.updateFeatureLink(this.linkModule).subscribe(res => {
        console.log(res);
      });
    } else {
      this.commonServices.addFeatureLink(this.linkModule).subscribe(res => {
        console.log(res);
      });
    }


  }

  clearForm() {
    this.linkModule.feature = "";
    this.linkModule.isapproved = false;
    this.linkModule.link = "";
    this.linkModule.side = "";
    this.linkModule.type = "";
    this.linkModule.websitename = "";
  }
}
