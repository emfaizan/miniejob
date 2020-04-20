import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = { email: 'faizan@portal.com', password: 'faizan' };
  loading = false;
  constructor(
    private router: Router,
    private authService: AuthService,
    private global: GlobalService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loading = true;
    if (this.model.email != undefined && this.model.password != undefined && this.model.email != '' && this.model.password != '') {
      this.authService.login(this.model.email, this.model.password)
        .subscribe(result => {
          console.log(result);
          console.log(result.user[0].IsWorker);
          if (result.session && result.success) {
            if(result.user[0].IsWorker){
              this.router.navigate(['/worker/i/home']);
            }
            else{
              this.router.navigate(['/admin/i/dashboard']);
            }
          } else {
            this.global.notifyError('Error', 'Credentials are incorrect');
          }
        }, (err) => {
          this.global.notifyError('Error', 'Credentials are incorrect');
          this.loading = false;
        });
    } else {
      this.global.notifyError('Error', 'Fields are Empty');
      this.loading = false;
    }

  }

}
