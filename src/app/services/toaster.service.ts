import { Injectable } from '@angular/core';
import { ToastrService } from "ngx-toastr";


@Injectable()
export class CustomToasterService {

  constructor(private toastrService: ToastrService) {

  }

  success(message: string, title?: string) {
    this.toastrService.success(
      message,
      "success",
      {
        closeButton: true,
        timeOut: 5000,
        onActivateTick: true
      }
    );
  }

  error(message: string, title?: string) {
    this.toastrService.error(
      message,
      "Error",
      {
        closeButton: true,
        timeOut: 5000,
        onActivateTick: true
      }
    );
  }

  warning(message: string) {
    this.toastrService.warning(
      message,
      "warning",
      {
        closeButton: true,
        timeOut: 5000,
        onActivateTick: true
      }
    );
  }

}