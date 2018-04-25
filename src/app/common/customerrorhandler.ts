import { ToasterService } from '../services/toaster.service';

import { ErrorHandler, Inject, Injector, Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class CustomErrorHandler implements ErrorHandler {

  /**
   * Get the dependency using the injecotor to avoid circular reference
   */
  constructor(@Inject(Injector) private injector: Injector) {  }

  /**
   * Helper to get the toaster reference from injector
   */
  private get toastrService(): ToastrService {
     return this.injector.get(ToastrService);
  }

  public handleError(error: any): void {
    var message = error.description;
    this.toastrService.error(
      message,
      "Unexpected Error",
      {
        closeButton: true,
        timeOut: 5000,
        onActivateTick: true
      }
    );

  }
}