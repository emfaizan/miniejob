import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jobs = [];

  constructor(
    private jobservice : JobService
  ) { }

  ngOnInit() {
    this.getJobs();
  }

  getJobs(){
    this.jobservice.getJobs()
    .subscribe(result => {
      console.log(result);
      this.jobs = result.jobs;
    })
  }

}
