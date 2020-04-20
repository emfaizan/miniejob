import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(
    private http: HttpClient,
    private global: GlobalService,
    private router: Router
  ) {
    this.getUserInfo.subscribe(x => {
      this.global.userId = x['Id'];
    });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.get(`${this.global.apiurl}/api/auth/userlogin?username=${email}&password=${password}`)
      .pipe(map(user => {
        console.log(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.global.userId = user["user"][0].Id;

        return user;
      }));
  }

  register(model): Observable<any> {

    return this.http.get(`${this.global.apiurl}/api/auth/UserRegister?FirstName=${model.FirstName}&LastName=${model.LastName}&Email=${model.email}&Role=${model.role}&Password=${model.password}`)
      .pipe(map(response => {
        return response;
      }));
  }


  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  // getUserInfo(): Observable<any>{
  //   if(typeof localStorage.getItem('currentUser') !== 'undefined') {
  //     var user = JSON.parse(localStorage.getItem('currentUser'));

  //     console.log("user info", user.user[0]);
  //     return user.user[0];
  //   }

  //   return {FirstName: '', LastName:''};

  // }

  getUserInfo = new Observable(subscriber => {
    if(localStorage.getItem("currentUser") !== null) {
      var user = JSON.parse(localStorage.getItem('currentUser'));

      subscriber.next(user.user[0]);
    }

    // subscriber.next({});
    
  });
}
