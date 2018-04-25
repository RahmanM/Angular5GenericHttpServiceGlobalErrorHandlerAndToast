import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from './data.service';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostService extends DataService {

  constructor(http: HttpClient) {
    super(http);
    this.url = "https://jsonplaceholder.typicode.com/posts/";
    this.resourceName = "Post";
  }

}