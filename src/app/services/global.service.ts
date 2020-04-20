import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import PNotify from 'pnotify/dist/es/PNotify';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  //apiurl = "http://fahadsaleem-002-site8.atempurl.com"
  apiurl = "http://localhost:59719";

  userId;

  constructor() { }

  notifySuccess(title: string, text: string) {
    PNotify.success({
      title: title,
      text: text,
      delay: 3000
    });
  }

  notifyError(title: string, text: string) {
    PNotify.error({
      title: title,
      text: text,
      delay: 3000
    });
  }

  notifyWarning(title: string, text: string) {
    PNotify.notice({
      title: title,
      text: text,
      delay: 3000
    });
  }

  handleError(error: any) {
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(error); // log to console instead
    if (error.status == 401) {
      alert("Please Login Again");
    }
    return throwError(errMsg);
  }
}
