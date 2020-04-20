import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import PNotify from 'pnotify/dist/es/PNotify';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model = { FirstName: "", LastName: "", email: "", role: "3", password: "" }

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model);
    this.authService.register(this.model)
      .subscribe(data => {
        if(data.success){
          PNotify.success({
            text: "User Registered successfully"
          });

          this.router.navigate(['/login']);
        }
      });
  }

}
