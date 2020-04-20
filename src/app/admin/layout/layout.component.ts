import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  user;
  constructor(
    private authService: AuthService,
    private jobService: JobService
  ) { }

  ngOnInit() {
    this.authService.getUserInfo.subscribe(x => {
      this.user = x;
    });
  }

  logout() {
    this.authService.logout();
  }

}
