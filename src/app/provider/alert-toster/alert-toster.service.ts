import {Injectable} from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class AlertToasterService {

  constructor(private toastrService: ToastrService) {

  }

  showSuccessToast(message, title) {
    this.toastrService.success(message, title, {
      enableHtml: true,
      timeOut: 3000,
      closeButton: true,
      positionClass: 'toast-top-center',
      tapToDismiss: true
    });
  }

  showErrorToast(message, title) {
    this.toastrService.error(message, title, {
      enableHtml: true,
      timeOut: 3000,
      closeButton: true,
      positionClass: 'toast-top-center',
      tapToDismiss: true
    });
  }
}
