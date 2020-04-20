import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http : HttpClient,
    private global: GlobalService
  ) { }

  getUser(): Observable <any> {
    return this.http.get(`${this.global.apiurl}/api/user/GetUserById?UserId=${this.global.userId}`)
      .pipe(map(user => {
        return user;
      }));
  }

  updateUser(data): Observable <any> {

    return this.http.get(`${this.global.apiurl}/api/user/GetUserById?UserId=${this.global.userId}&FirstName=${data.firstName}&LastName=${data.lastName}&Address=${data.address}&Email=${data.email}&City=${data.city}`)
      .pipe(map(res => {
        return res;
      }));
  }

  getWorker(): Observable <any> {
    return this.http.get(`${this.global.apiurl}/api/worker/GetAllWorkers`)
      .pipe(map(workers => {
        return workers;
      }));
  }

  getWorkerById(id): Observable <any> {
    return this.http.get(`${this.global.apiurl}/api/worker/getWorkerById?Id=${id}`)
      .pipe(map(workers => {
        return workers;
      }));
  }

  getWorksiteInfo(): Observable <any> {
    return this.http.get(`${this.global.apiurl}/api/Worksite/WorksiteDetailsByUserId?userid=${this.global.userId}`)
      .pipe(map((worksite:any) => {
        return worksite.results;
      }));
  }
}
