import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-upcoming-jobs',
  templateUrl: './upcoming-jobs.component.html',
  styleUrls: ['./upcoming-jobs.component.css']
})
export class UpcomingJobsComponent implements OnInit {
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
    this.jobservice.getWorkerUpcomingJobs()
    .subscribe(result => {
      console.log(result);
      this.jobs = result.jobs;
    });
  }

  startJob(job){
    job.JobStatus = 'Started';
    this.jobservice.startJob(job.AppliedId)
    .subscribe(result => {});
  }

  completeJob(appliedId, jobid){
    this.jobservice.completeJob(appliedId, jobid)
    .subscribe(result => {
      this.getJobs();
      console.log(result);
    });
  }
}
