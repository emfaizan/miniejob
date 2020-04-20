import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jobs = [];
  user: any;

  constructor(
    private jobservice: JobService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getJobs();

    this.authService.getUserInfo
    .subscribe(user => {
      this.user = user;
      console.log("user", this.user);
    });
  }

  getJobs(){
    this.jobservice.getWorkerJobs()
    .subscribe(result => {
      console.log(result);
      this.jobs = result.jobs;
    });
  }

  applyJob(job){
    job.HasApplied = true;
    this.jobservice.applyJob(this.user.Id, job.Id)
    .subscribe(result => {
      console.log(result);
    })
  }

}
