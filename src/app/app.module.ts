import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostComponent } from './post.component';
import { DataService } from './services/data.service';
import { PostService } from './services/post.service';
import { CustomErrorHandler } from './common/customerrorhandler'
import { ErrorHandler } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomToasterService } from './services/toaster.service';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports:      [ 
    BrowserModule, FormsModule, HttpClientModule,
    BrowserAnimationsModule,ToastrModule.forRoot()
    ],
  declarations: [ 
    AppComponent, PostComponent 
    ],
  providers:    [ 
      DataService,
      PostService,
      // custom general herror handler
      {
          provide: ErrorHandler, 
          useClass: CustomErrorHandler,
      },
      CustomToasterService
    ],
  bootstrap:    [
     AppComponent 
     ]
  
})
export class AppModule { }
