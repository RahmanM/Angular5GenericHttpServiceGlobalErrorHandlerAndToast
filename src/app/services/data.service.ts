import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable"
import { AppError } from "../common/app.error"
import { UnknownError } from "../common/unknown.error"
import { NotFoundError } from "../common/notfound.error"
import { UnAuthorizedError } from "../common/unauthorized.error"
import { BadRequestError } from "../common/badrequest.error"
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ModelBase } from '../models/model.base'

/**
 * Generic HTTP data service to be used by all other services
 */
@Injectable()
export class DataService {

  /**
   * Url of the service to connect to
   */
  url: string;

  /**
   * Name of the resource to be used e.g. Customer, Invoice, etc
   */
  resourceName: string;

  constructor(private http: HttpClient) {  }

  getAll() {
    console.log(this.url, "url")

    return this.http.get(this.url)
      .catch(this.handleError);
  }

  delete(id: number) {
    return this.http.delete(this.url + id)
      .catch(this.handleError);
  }

  update(resource:ModelBase) {
    console.log(resource);
    return this.http.put(this.url + resource.id, JSON.stringify(resource))
      .catch(this.handleError);
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
      .catch(this.handleError);
  }

  handleError = (error: Response) => {

    if (error.status === 404) {
      return Observable.throw(new NotFoundError(error, this.resourceName));
    }

    if (error.status === 401) {
      return Observable.throw(new UnAuthorizedError(error, this.resourceName));
    }

    if (error.status === 400) {
      return Observable.throw(new BadRequestError(error, this.resourceName));
    }

    return Observable.throw(new UnknownError(error))

  }

}