import {Component, OnInit} from '@angular/core';
import {CommonService} from "../../../../provider/common.service";
import {WebsiteComment} from "../../../../model/WebsiteComment.model";

@Component({
  selector: 'pb-mind-check',
  templateUrl: './mind-check.component.html',
  styleUrls: ['./mind-check.component.scss']
})
export class MindCheckComponent implements OnInit {
  // topic: any = "";
  // comment: any = "";
  websiteComment: WebsiteComment = new WebsiteComment();

  constructor(private commonService: CommonService) {

  }

  ngOnInit() {
  }

  clearData() {
    this.websiteComment.topic = "";
    this.websiteComment.comment = "";
    this.websiteComment.email = "";
  }

  sendCommit() {

    this.commonService.sendWebsiteComment(this.websiteComment).subscribe(response => {
      console.log(response);
    });
    this.clearData();
  }
}
